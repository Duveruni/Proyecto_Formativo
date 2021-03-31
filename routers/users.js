const express = require('express');
const Ruta_users = express.Router();
const conexion = require('../conexion_BBDD.js');


Ruta_users.get('/signup', (req, res) => {
    res.render('signup');
})

Ruta_users.get('/signin', (req, res) => {
    res.render('signin');
})

module.exports = Ruta_users;