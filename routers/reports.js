const express = require('express');
const Ruta_reportes = express.Router();
const conexion = require('../conexion_BBDD.js');
const { response } = require('express');

function validar(peticion, respuesta, next){
    if(peticion.session.usuario_id){
        next();
    }else{
        respuesta.redirect('/users/signin');
    }
}


Ruta_reportes.get('/reports', (req, res) => {
    res.render('reports');

    
});

module.exports = Ruta_reportes;