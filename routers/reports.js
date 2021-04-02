const express = require('express');
const Ruta_reports = express.Router();
const conexion = require('../conexion_BBDD.js');

function validar(peticion, respuesta, next){
    if(peticion.session.usuario_id){
        next();
    }else{
        respuesta.redirect('/users/signin');
    }
}


Ruta_reports.get('/reports', (req, res) => {
    res.render('reports');
})

module.exports = Ruta_reports;