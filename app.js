
// const express = require('express')
// const dotenv =require ('dotenv')
// const cookieParser =require ('cokie-parser')


import express from 'express'
import dotenv from 'dotenv'
import router from './routes/router.js'

// import cookieParser from 'cookie-parser'

const app = express()


//steeamos el motor de plantillas
app.set('view engine', 'ejs')


//seteamos la carpeta public para archivos estaticos
app.use(express.static('public'))

// para procesar datos enviados desde forms
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//seteamos las variables de entorn
dotenv.config({path: './env/.env'})


//para poder trabajar con las coookies
// app.use(cookieParser)

//llamar a routr
app.use('/',router)



// app.use('/',require('./routes/router'))

app.listen(3001, ()=>{
    console.log('SERVER UP running in http://localhost:3000');
})
