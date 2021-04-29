const express = require('express');
const Ruta_reports = express.Router();
const conexion = require('../conexion_BBDD.js');

function validar(req, res, next){
    if(req.session.usuario_id){
        next();
    }else{
        res.redirect('/');
    }
}


Ruta_reports.get('/', (req, res) => {
    var user_id = req.session.id_usuario;
    res.render('reports', {usuario: user_id});
})

Ruta_reports.get('/reporte_personas', (req, res) => {
    
    var sql = `select * from persona`;

    conexion.query(sql,(err,rows,fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log('Error al ejecutar el sql en la BD'+ err);
        }
    });
})



Ruta_reports.get('/reporte_elementos', (req, res) => {
    
    var sql = 'select * from elementos'

    conexion.query(sql,(err,rows,fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log('Error al ejecutar el sql en la BD'+ err);
        }
    });
})


Ruta_reports.get('/reporte_ingresos', (req, res) => {
    
    var sql = `select i.id_ingreso, i.hora_entrada, i.fecha_entrada, i.hora_salida, i.fecha_salida, i.estado, per.tipo_documento, per.identificacion, per.nombres, per.apellidos, per.telefono, per.Tipo_persona, e.tipo_elemento, e.num_serial, e.caracteristicas, e.marca, e.modelo from ingreso i
    join persona per on per.identificacion = i.fk_persona
    join elementos e on e.id_elemento = i.fk_elemento`;

    conexion.query(sql,(err,rows,fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log('Error al ejecutar el sql en la BD'+ err);
        }
    });
})


Ruta_reports.get('/reporte_usuarios', (req, res) => {
    
    var sql = `select * from usuarios`;

    conexion.query(sql,(err,rows,fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log('Error al ejecutar el sql en la BD'+ err);
        }
    });
})


module.exports = Ruta_reports;