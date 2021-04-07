const express = require('express');
const Ruta_home = express.Router();
const conexion = require('../conexion_BBDD.js');


Ruta_home.get('/', (req, res) => {
    res.render('home');
});


module.exports = Ruta_home;