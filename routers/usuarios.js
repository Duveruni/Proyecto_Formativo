const express = require('express');
const Ruta_usuario = express.Router();
const conexion = require('../conexion_BBDD.js');


Ruta_usuario.get('/signup', (req, res) => {
    res.render('signup');
})

Ruta_usuario.post('/signup', (req, res) => {

    
    var ide=peticion.body.identificacion;
    var nom=peticion.body.nombres;
    var ape=peticion.body.apellidos;
    var use=peticion.body.usuario;
    var pas=peticion.body.contraseña;
    var sql=`insert into usuarios((identificacion,nombres,apellidos,usuario,contraseña) values('${ide}','${nom}','${ape}','${use}','${pas}')`;
    conexion.query(sql,(err,rows,fields)=>{
        if(!err){
            respuesta.send('se inserto la persona con exito!!');

        }else{
            console.log("error al ejecutar el sql en la bd"+err);
        }
    });

});

 /* iniciar sesion  */

 Ruta_usuario.get('/signin', (req, res) => {
    res.render('signin');
})

Ruta_usuario.post('/signin', (req, res) => {
    res.render('signin');
})

module.exports = Ruta_usuario;