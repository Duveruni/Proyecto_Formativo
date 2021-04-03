const express = require('express');
const Ruta_registro = express.Router();
const conexion = require('../conexion_BBDD.js');

function validar(peticion, respuesta, next){
    if(peticion.session.usuario_id){
        next();
    }else{
        respuesta.redirect('/users/signin');
    }
}

Ruta_registro.get('/Listar_personas', (req, res) => {
    var sql = 'select * from persona';

    conexion.query(sql,(err,rows,fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log('Error al ejecutar el sql en la BD');
        }
    });
})

// consultar personas
Ruta_registro.get('/consultar_documento', (req, res) => {

    var ident = req.body.identificacion;
    var sql = ' SELECT * from persona where identificacion = ' + ident;

    console.log(ident);
    conexion.query(sql,(err,rows,fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log('Error al ejecutar el sql en la BD');
        }
    });
})

// Registrar personas

Ruta_registro.get('/registros', (req, res) => {
    res.render('register_elements');
})

Ruta_registro.post('/register_people',(req, res)=>{

    var id = req.body.id_persona;
    var tipo_documento = req.body.tipo_documento;
    var numero_documento = req.body.numero_documento;
    var nombres = req.body.nombres;
    var apellidos = req.body.apellidos;
    var telefono = req.body.telefono;
    var tipo_persona = req.body.tipo_persona;

    var sql = `insert into persona(tipo_documento,identificacion,nombres,apellidos,telefono,Tipo_persona) values ('${tipo_documento}','${numero_documento}','${nombres}','${apellidos}','${telefono}','${tipo_persona}')`;
    
    conexion.query(sql,(err,rows,fields) => {
        if(!err){
            res.render('register_elements');
            
        }else{
            console.log('Sucedio un error al hacer el registro. Por favor vuelva a intentarlo nuevamente.' + err);
        }
    });
})




module.exports = Ruta_registro;