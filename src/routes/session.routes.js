import  express  from "express";
import passport from "passport";

const sessionRouter = express.Router();

// router github

sessionRouter.get("/github", passport.authenticate("github", { scope: ["user: email"]}), async (req, res) =>{ })

sessionRouter.get("/githubcallback", passport.authenticate("github", {failureRedirect: "/github/error"}), async (req, res) => {
    const user = req.user;
    req.session.user = {
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        age: user.age
    }
    req.session.admin = true;
    res.redirect("/users");
})
sessionRouter.post("/register", passport.authenticate('register', { failureRedirect: '/api/sessions/fail-register' }), async (req, res) => {
    console.log("Registrando nuevo usuario.");
    res.status(201).send({ status: "success", message: "Usuario creado con exito." })

})

sessionRouter.post("/login", passport.authenticate("login", { message: '' }), async (req, res) => {
    const user = req.user;

    if (!user) return res.status(401).send({ status: "error", error: "credenciales incorrectas" });
    req.session.user = {
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        age: user.age
    }
    res.send({ status: "success", payload: req.session.user, message: "¡Primer logueo realizado! " });
});



export default sessionRouter;