const mysql = require('mysql');

var conexion=mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "12345",
    database: "bd_proyformativo"
});

conexion.connect((error)=>{

    if(!error){
        console.log("Se realizo la conexion a la base de datos 'bd_proyformativo' de mysql");
    }
    else{
        console.log("No se conecto al motor de la base de datos de mysql" + error);
    }
});

module.exports=conexion;