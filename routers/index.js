const express = require('express');
const Ruta_index=express.Router();
const conexion = require('../conexion_BBDD.js');

Ruta_index.get('/',(peticion,respuesta)=>{
    respuesta.render('index');
});


module.exports=Ruta_index;