const express = require('express');
const Ruta_reportes = express.Router();
const conexion = require('../conexion_BBDD.js');
const { response } = require('express');


Ruta_reportes.get('/reports', (req, res) => {
    res.render('reports');

    
});

module.exports = Ruta_reportes;