const { Router } = require('express')
const viewRouter = require("./viewRouter")
const router = Router();
router.use("/",viewRouter)
module.exports = router;