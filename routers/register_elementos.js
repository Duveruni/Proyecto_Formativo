const express = require('express');
const Ruta_registro = express.Router();
const conexion = require('../conexion_BBDD.js');


Ruta_registro.get('/register_elements', (req, res) => {
    res.render('register_elements');
})

// Ruta_prueba.get('/Listar_Personas', (peticion, respuesta)=>{
//     var sql = 'select * from persona';
//     conexion.query(sql,(err,rows,fields) => {
//         if(!err){
//             respuesta.json(rows);
//         }else{
//             console.log('Error al ejecutar el sql en la BD');
//         }
//     });
// });

module.exports = Ruta_registro;