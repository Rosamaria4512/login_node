import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import conexion from "../database/db.js";
import { promisify } from "util";
import express from "express";

const authController = express();
//procedimiento metodo para registrarme
export const resgister = async (req, res) => {
  try {
    const user = req.body.user;
    const name = req.body.name;
    const password = req.body.password;
   
    let passHash = await bcryptjs.hash(password, 8);
    // console.log(passHash);
 conexion.query('INSERT INTO user SET ?',{user:user,name:name,password:passHash},(error, results)=>{
    if (error) {console.log(error)}
        res.redirect('/')
 })
    
  } catch (error) {
    console.log(error);
  }

  // console.log(passHash);
}

//procedimienti para login
export const login = async (req, res) => {
  try {
   const datos  = req.body.datos;
    const user = req.body.user
    const pass = req.body.password
    console.log(user + ' ' + pass)
    // console.log(datos);
  } catch (error) {
    
  }
}


export default authController;
