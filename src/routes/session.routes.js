import  express  from "express";
import userModel from "../models/usersModel.js";

const sessionRouter = express.Router();

sessionRouter.post("/register", async (req, res)=> {
    try {
        
    const {firstName, lastName, email, age, password } = req.body;
    console.log("usuario registrado");
    
    const exist = await userModel.findOne({email});
    if(exist){
        return res.status(400).send({status: 'error', message: 'el usuario ya existe'})
    }

    const user = {
        firstName,
        lastName,
        email,
        age,
        password
    }

    const result = await userModel.create(user);
    res.send({status: 'success', message: 'usuario creado con exito ID:'+ result.id})

} catch (error) {
        throw new Error(error)
}
});


sessionRouter.post("/login", async (req, res)=> {

    const {email, password} = req.body;
    const user = await userModel.findOne({email, password});

    if(!user) return res.status(401).send({status: error, message: 'el usuario no existe'});

    req.session.user = {
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        age: user.age
    }

    res.send({status: 'success', payload: req.session.user, messsage: 'logueado con exito'}); 

});


export default sessionRouter;