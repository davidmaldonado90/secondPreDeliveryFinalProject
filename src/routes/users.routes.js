import  express  from "express"

const userRoute = express.Router();

userRoute.get("/register", (req, res)=> {
    res.render("register")
});

userRoute.get("/login", (req, res)=> {
    res.render("login")
});


userRoute.get("/", (req, res)=> {
    res.render("profile", {
        user: req.session.user
    })
});

export default userRoute;