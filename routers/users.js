const express = require('express');
const Ruta_users = express.Router();
const conexion = require('../conexion_BBDD.js');

function validar(req, res, next){
    if(req.session.id_usuario){
        next();
    }else{
        res.redirect('/');
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
            req.session.id_usuario=rows;
            var user_id = req.session.id_usuario;
            console.log(req.session.id_usuario)
            if(req.session.id_usuario.length>0) {
                res.render('registrar_ingresos', {usuario: user_id})
                
            }else{
                res.redirect('/');
            }
            
        }else{
            console.log('Error al ejecutar el sql en la BD' + err);
        }
    });
})

Ruta_users.get('/logout', validar, (req, res) => {
    req.session.destroy();
    res.redirect('/');
})

// PERFIL
Ruta_users.get('/perfil', (req, res) => {
    var user_id = req.session.id_usuario;
    res.render('perfil', {usuario: user_id});
})

// editar perfil
Ruta_users.post('/editar_usuario', (req, res)=>{

    var id = req.body.id_usuario;
    
    var sql = `select identificacion, nombres, apellidos, nombre_Usuario from usuarios where id_usuario = ${id}`;
    console.log(sql)
    conexion.query(sql,(err,rows,fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log('Error al ejecutar el sql en la BD' + err);
        }
    });
});



Ruta_users.get('/ayuda', (req, res) => {
    var user_id = req.session.id_usuario;
    res.render('help', {usuario: user_id});
})



module.exports = Ruta_users;