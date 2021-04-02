const express = require('express');
const Ruta_registro = express.Router();
const conexion = require('../conexion_BBDD.js');

<<<<<<< HEAD
=======
function validar(peticion, respuesta, next){
    if(peticion.session.usuario_id){
        next();
    }else{
        respuesta.redirect('/users/signin');
    }
}

>>>>>>> f4c72fe9b5dbe1705bdfd04f0d793556ccd4f24c
Ruta_registro.get('/register_elements', (req, res) => {
    res.render('register_elements');
})


Ruta_registro.post('/Registrar_persona',(peticion, respuesta)=>{

    var tipo_documento = peticion.body.tipo_documento;
    console.log(tipo_documento);
    var numero_documento = peticion.body.numero_documento;
    var nombres = peticion.body.nombres;
    var apellidos = peticion.body.apellidos;
    var telefono = peticion.body.telefono;
    var tipo_persona = peticion.body.tipo_persona;

    var sql = `insert into persona(tipo_documento,numero_documento,nombres,apellidos,telefono,tipo_persona) values ('${tipo_documento}','${numero_documento}','${nombres}','${apellidos}','${telefono}','${tipo_persona}')`;
    conexion.query(sql,(err,rows,fields) => {
        if(!err){
            respuesta.send('Se Registro correctamente');
        }else{
            console.log('Error al ejecutar el sql en la BD' + err);
        }
    });
})


Ruta_registro.post('/Registrar_elemento',(peticion, respuesta)=>{


    var num_serial = peticion.body.num_serial;
    var caracteristicas = peticion.body.caracteristicas;
    var marca = peticion.body.marca;
    var modelo = peticion.body.modelo;

    var sql = `insert into elemento(num_serial,caracteristicas,marca,modelo) values ('${num_serial}','${caracteristicas}','${marca}','${modelo}')`;
    conexion.query(sql,(err,rows,fields) => {
        if(!err){
            respuesta.send('Se Registro correctamente');
        }else{
            console.log('Error al ejecutar el sql en la BD' + err);
        }
    });
})

module.exports = Ruta_registro;