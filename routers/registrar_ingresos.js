const express = require('express');
const Ruta_registrar_ingresos = express.Router();
const conexion = require('../conexion_BBDD.js');

function validar(peticion, respuesta, next){
    if(peticion.session.usuario_id){
        next();
    }else{
        respuesta.redirect('/');
    }
}

Ruta_registrar_ingresos.get('/', (req, res) => {
    var user_id = req.session.id_usuario;
    res.render('registrar_ingresos', {usuario: user_id});
})

Ruta_registrar_ingresos.get('/Listar_elementos', (req, res) => {
    
    var sql = `select i.id_ingreso, i.hora_entrada, i.fecha_entrada, per.identificacion, per.nombres, e.tipo_elemento, e.num_serial, e.caracteristicas from ingreso i
    join persona per on per.identificacion = i.fk_persona
    join elementos e on e.id_elemento = i.fk_elemento
    where estado like 'ingreso%';`;

    conexion.query(sql,(err,rows,fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log('Error al ejecutar el sql en la BD'+ err);
        }
    });
})


// nuevo ingreso
Ruta_registrar_ingresos.post('/buscar_documento', (req, res) => {

    var id = req.body.identificacion_p;
    var sql = `select * from elementos where fk_persona =  '${id}'`;
    console.log(sql)
    conexion.query(sql,(err,rows,fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log('Error al ejecutar el sql en la BD'+ err);
        }
    });
})

Ruta_registrar_ingresos.post('/guardar_ingreso', (req, res) => {

    var hora = req.body.HoraActual;
    var fecha = req.body.fechaActual;
    var estado = req.body.estado;
    var fk_pers = req.body.fk_persona;
    var fk_elem = req.body.fk_elemento;


    var sql = `insert into ingreso (hora_entrada, fecha_entrada, estado, fk_persona, fk_elemento) values ('${hora}','${fecha}','${estado}','${fk_pers}','${fk_elem}')`;
    console.log(sql)
    conexion.query(sql,(err,rows,fields) => {
        if(!err){
            res.send('se ingreso corecctamente el ingreso del elemento ' + fk_elem);
            // res.json(rows);
        }else{
            console.log('Error al ejecutar el sql en la BD'+ err);
        }
    });
})


Ruta_registrar_ingresos.post('/Buscar_registro', (req, res)=>{

    var id = req.body.id_ingreso;
    
    var sql = 'select id_ingreso, hora_entrada, fecha_entrada, estado, fk_persona, fk_elemento from ingreso where id_ingreso = ' + id;
    conexion.query(sql,(err,rows,fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log('Error al ejecutar el sql en la BD');
        }
    });
});

Ruta_registrar_ingresos.put('/Guardar_salida', (req, res) => {

    var id = req.body.id_ingreso;
    var hora_salida = req.body.HoraActual;
    var fecha_salida = req.body.fechaActual;
    var estado2 = req.body.estado;


    var sql = `update ingreso set hora_salida='${hora_salida}', fecha_salida='${fecha_salida}',estado='${estado2}' where id_ingreso = '${id}';`;
    console.log(sql)
    conexion.query(sql,(err,rows,fields) => {
        if(!err){
            res.send('Se actualizo correctamente los datos de ');
            // res.json(rows);
        }else{
            console.log('Error al ejecutar el sql en la BD'+ err);
        }
    });
})


module.exports = Ruta_registrar_ingresos;