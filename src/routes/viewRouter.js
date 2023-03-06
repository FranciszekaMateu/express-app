const app = require("../app")
const { Router } = require('express')
const router = Router()
console.log(app)
router.get('/chat' ,(request, response) =>{
    const email = request.query;
    if(email == undefined)
    {
        response.redirect("/login")
    }
    else
    {
        response.render("chat",{
            user:email
        })
    }
 })
router.get("/login",(request, response) =>{
    response.render("login")
})
router.post("/api/login",(req,res)=>
{
    const {email} = req.body
    res.redirect(`/chat?usuario=${email}`);
})
module.exports = router;
