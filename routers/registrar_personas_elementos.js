const express = require('express');
const Ruta_registro = express.Router();
const conexion = require('../conexion_BBDD.js');

function validar(peticion, respuesta, next){
    if(peticion.session.usuario_id){
        next();
    }else{
        respuesta.redirect('/');
    }
}

Ruta_registro.get('/persona', (req, res) => {
    var user_id = req.session.id_usuario;
    res.render('registrar_persona', {usuario: user_id});
})

Ruta_registro.get('/elemento', (req, res) => {
    var user_id = req.session.id_usuario;
    res.render('registrar_elementos', {usuario: user_id});
})

// consultar personas
Ruta_registro.post('/consultar_documento', (req, res) => {

    var ident = req.body.identificacion;
    var sql = 'select tipo_documento, identificacion, nombres, apellidos, telefono, Tipo_persona from persona where identificacion = ' + ident;
    console.log(sql);
    conexion.query(sql,(err,rows,fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log('Error al ejecutar el sql en la BD');
        }
    });
})

// Registrar personas

Ruta_registro.post('/registrar_persona', (req, res)=>{

    // var id = req.body.id_persona;
    var tipo_documento = req.body.tipo_documento;
    var numero_documento = req.body.numero_documento;
    var nombres = req.body.nombres;
    var apellidos = req.body.apellidos;
    var telefono = req.body.telefono;
    var tipo_persona = req.body.tipo_persona;

    var sql = `insert into persona(tipo_documento,identificacion,nombres,apellidos,telefono,Tipo_persona) values ('${tipo_documento}','${numero_documento}','${nombres}','${apellidos}','${telefono}','${tipo_persona}')`;
    
    conexion.query(sql,(err,rows,fields) => {
        if(!err){
            res.send('Se registro correctamente a ' + nombres + apellidos);
            
        }else{
            console.log('Sucedio un error al hacer el registro. Por favor vuelva a intentarlo nuevamente.' + err);
        }
    });
})

// Registrar elemento

Ruta_registro.post('/registrar_elemento',  (req, res)=>{

    var tip_elemento = req.body.tipo_elemento;
    var numero_serial = req.body.numero_serial;
    var caract = req.body.caracteristicas;
    var marc = req.body.marca;
    var model = req.body.modelo;
    var resp = req.body.responsable;


    var sql = `insert into elementos(tipo_elemento,num_serial,caracteristicas,marca,modelo, fk_persona) values ('${tip_elemento}','${numero_serial}','${caract}','${marc}','${model}','${resp}')`;
    
    conexion.query(sql,(err,rows,fields) => {
        if(!err){
            res.send('Se registro correctamente el elemento.');
            
        }else{
            console.log('Sucedio un error al hacer el registro. Por favor vuelva a intentarlo nuevamente.' + err);
        }
    });
})

// editar persona

Ruta_registro.post('/Buscar_persona_p', (req, res) => {

    var ident = req.body.ident;
    var sql = `select * from persona where identificacion =  '${ident}'`;
    console.log(sql)
    conexion.query(sql,(err,rows,fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log('Error al ejecutar el sql en la BD'+ err);
        }
    });
})

Ruta_registro.put('/Actualizar_persona', (peticion, respuesta)=>{

    var tipo_doc = peticion.body.tipo_documento;
    var ident = peticion.body.numero_documento;
    var nom = peticion.body.nombres;
    var apel = peticion.body.apellidos;
    var tel = peticion.body.telefono;
    var tipo_per = peticion.body.tipo_persona;

    var sql = `update persona set tipo_documento='${tipo_doc}', nombres='${nom}',apellidos='${apel}',telefono='${tel}',Tipo_persona='${tipo_per}' where identificacion='${ident}'`;
    console.log(sql)
    conexion.query(sql,(err,rows,fields) => {
        if(!err){
            respuesta.send('Se actualizo correctamente los datos de ' + nom + ' ' + apel );
        }else{
            console.log('Error al ejecutar el sql en la BD' + err);
        }
    });
})

// Buscar elemento

Ruta_registro.post('/Buscar_elemento', (req, res) => {

    var serial = req.body.serial;
    var sql = `select * from elementos where num_serial =  '${serial}'`;
    console.log(sql)
    conexion.query(sql,(err,rows,fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log('Error al ejecutar el sql en la BD'+ err);
        }
    });
})

Ruta_registro.put('/Actualizar_elemento',(peticion, respuesta)=>{

    var tipo_elem = peticion.body.tipo_elemento;
    var num_serial = peticion.body.numero_serial;
    var caract = peticion.body.caracteristicas;
    var marca = peticion.body.marca;
    var modelo = peticion.body.modelo;
    var resp = peticion.body.responsable;

    var sql = `update elementos set tipo_elemento='${tipo_elem}',caracteristicas='${caract}',marca='${marca}',modelo='${modelo}', fk_persona='${resp}' where  num_serial='${num_serial}'`;
    console.log(sql)
    conexion.query(sql,(err,rows,fields) => {
        if(!err){
            respuesta.send('Se actualizo el elemento correctamente');
        }else{
            console.log('Error al ejecutar el sql en la BD' + err);
        }
    });
})

module.exports = Ruta_registro;