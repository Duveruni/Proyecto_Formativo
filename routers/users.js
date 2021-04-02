const express = require('express');
const Ruta_users = express.Router();
const conexion = require('../conexion_BBDD.js');

function validar(peticion, respuesta, next){
    if(peticion.session.usuario_id){
        next();
    }else{
        respuesta.redirect('/users/signin');
    }
}


Ruta_users.get('/signup', (req, res) => {
    res.render('signup');
})

Ruta_users.post('/signup', (req, res) => {

    var ident = req.body.identificacion;
    var nomb = req.body.nombres;
    var apel = req.body.apellidos;
    var usern = req.body.username;
    var pass = req.body.password;

    var sql = `insert into usuarios(identificacion,nombres,apellidos,nombre_Usuario,password) values ('${ident}','${nomb}','${apel}','${usern}','${pass}')`;
    conexion.query(sql,(err,rows,fields) => {
        if(!err){
            res.redirect('/users/signin')
        }else{
            console.log('Error al ejecutar el sql en la BD' + err);
        }
    });
})


Ruta_users.get('/signin', (req, res) => {
    res.render('signin');
})

Ruta_users.post('/signin', (req, res) => {
    
    var usern = req.body.username;
    var pass = req.body.password;

    var sql = `select * from usuarios where nombre_Usuario=${usern} and password=${pass}`;
    conexion.query(sql,(err,rows,fields) => {
        
        if(!err){
            req.session.usuario_id=rows;
            if(req.session.usuario_id.length>0) {
                res.redirect('/registro/register_elements')
            }
            
        }else{
            console.log('Error al ejecutar el sql en la BD' + err);
        }
    });
})

Ruta_users.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/users/signin');
})


module.exports = Ruta_users;