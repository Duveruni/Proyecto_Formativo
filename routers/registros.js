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


// consultar personas
Ruta_registro.get('/consultar_documento', (req, res) => {

    var ident = peticion.body.identificacion;
    var sql = 'select nombres, apellidos, telefono, Tipo_persona from persona where identificacion = ' + ident;
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

// Registrar elemento

Ruta_registro.post('/register_element',(req, res)=>{

    // var id = req.body.id_elemento;
    var tip_elemento = req.body.tipo_elemento;
    var numero_serial = req.body.numero_serial;
    var caract = req.body.caracteristicas;
    var marc = req.body.marca;
    var model = req.body.modelo;


    var sql = `insert into elementos(tipo_elemento,num_serial,caracteristicas,marca,modelo) values ('${tip_elemento}','${numero_serial}','${caract}','${marc}','${model}')`;
    
    conexion.query(sql,(err,rows,fields) => {
        if(!err){
            res.render('register_elements');
            
        }else{
            console.log('Sucedio un error al hacer el registro. Por favor vuelva a intentarlo nuevamente.' + err);
        }
    });
})

Ruta_registro.get('/Listar_elementos', (req, res) => {
    var sql = 'select * from elementos';

    conexion.query(sql,(err,rows,fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log('Error al ejecutar el sql en la BD');
        }
    });
})

Ruta_registro.delete('/Eliminar_elemento',(req, res)=>{

    var id_elemento = req.body.id_elemento;

    var sql = `delete from elementos where id_elemento = '${id_elemento}'`;
    conexion.query(sql,(err,rows,fields) => {
        if(!err){
            res.send('Se elimino correctamente el elemento');
        }else{
            console.log('Error al ejecutar el sql en la BD' + err);
        }
    });
})




module.exports = Ruta_registro;