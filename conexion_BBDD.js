const mysql = require('mysql');

var conexion=mysql.createConnection({
    host : "localhost",
    user : "root",
<<<<<<< HEAD
    password : "",
    database: "database_adsi"
=======
    password : "12345",
    database: "proyecto_adsi"
>>>>>>> f4c72fe9b5dbe1705bdfd04f0d793556ccd4f24c
});

conexion.connect((error)=>{

    if(!error){
<<<<<<< HEAD
        console.log("Se realizo la conexion a la base de datos 'database_adsi' de mysql");
=======
        console.log("Se realizo la conexion a la base de datos 'proyecto_adsi' de mysql");
>>>>>>> f4c72fe9b5dbe1705bdfd04f0d793556ccd4f24c
    }
    else{
        console.log("No se conecto al motor de la base de datos de mysql" + error);
    }
});

module.exports=conexion;