const express = require('express');
const Ruta_reports = express.Router();
const conexion = require('../conexion_BBDD.js');


Ruta_reports.get('/reports', (req, res) => {
    res.render('reports');
})

module.exports = Ruta_reports;