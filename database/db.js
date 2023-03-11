import mysql from 'mysql'
 
const conexion = mysql.createConnection({


     host : process.env.DB_HOST,
     port : process.env.DB_PORT,
     user : process.env.DB_USER,
     password : process.env.DB_PASS,
     database : 'login_node_jwt'
})

conexion.connect  ( (error)=>{
if (error){
    console.log('el error de conexion es:' + error)
    return

} 
console.log('conectado a la base de datos MYSQL')
})


export default conexion