const express = require('express');
const Ruta_help = express.Router();
const conexion = require('../conexion_BBDD.js');


Ruta_help.get('/', (req, res) => {
    res.render('signup');
})


module.exports = Ruta_help;