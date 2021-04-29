const express = require('express');
const Ruta_home = express.Router();
const conexion = require('../conexion_BBDD.js');


Ruta_home.get('/', (req, res) => {
    var user_id = req.session.id_usuario;
    res.render('home', {usuario: user_id});
});


module.exports = Ruta_home;