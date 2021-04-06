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



Ruta_reports.get('/generar_reporte', (req, res) => {
    var sql = 'select * from elemento';

    conexion.query(sql,(err,rows,fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log('Error al ejecutar el sql en la BD');
        }
    });
})


module.exports = Ruta_reports;