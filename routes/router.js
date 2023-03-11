import  express  from "express"
import  {login, resgister} from "../controllers/authController.js"


// const express = require('express')
const router = express.Router()


// router para las vistas

router.get('/',(req,res)=>{
    res.render('index')
})

router.get('/login',(req,res)=>{
    res.render('login')
})

router.get('/resgister',(req,res)=>{
    res.render('resgister')
})



//router para los metodos de control
router.post('/resgister',resgister)
router.post('/login',login)
export default router



// module.exports = router
