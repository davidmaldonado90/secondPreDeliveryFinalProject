import passport from "passport";
import passportLocal from "passport-local";
import userModel from "../models/usersModel.js";
import { hashCreate, isValidPassword } from '../utils.js';

const localSTrategy = passportLocal.Strategy;

const initializePassport = ()=>{

    passport.use('register', new localSTrategy(

            { passReqToCallback: true, usernameField: 'email' },
            async (req, username, password, done) => {

            const {firstName, lastName, email, age } = req.body;
        try {
        
            const exist = await userModel.findOne({email});    
            if(exist){
                return done(null, false, {message: "el usuario ya existe"})
            }

            const user = {
                firstName,
                lastName,
                email,
                age,
                password: hashCreate(password)
            }

            const result = await userModel.create(user);

            return done (null, result);

        } catch (error) {
                return done ("error registrando al usuario" + error)
        }
    }
    ));

    passport.use('login', new localSTrategy(
        { passReqToCallback: true, usernameField: 'email' },

        async (req, username, password, done) => {
            try {
                const user = await userModel.findOne({ email: username })
                if (!user) {
                    console.warn("el usuario no existe con este nombre: " + username);
                    return done(null, false)
                }

                if (!isValidPassword(user, password)) {
                    return done(null, false)
                }
                return done(null, user)
            } catch (error) {
                return done(error)
            }
        }
    ));



    //Funciones de Serializacion y Desserializacion
    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            let user = await userModel.findById(id);
            done(null, user);
        } catch (error) {
            console.error("Error deserializando el usuario: " + error);
        }
    }); 
    
}

export default initializePassport;