
const { Router } = require('express')
const router = Router()
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
