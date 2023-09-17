import express from "express";

const gitRoute = express.Router();

gitRoute.get("/login", (req,res) => {
    res.render("github-login")
})

gitRoute.get("/error", (req, res) => {
    res.render("error", {error: "no se pudo autenticar con github"})
})

export default gitRoute;