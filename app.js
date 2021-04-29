const express = require('express');
const body_parser = require('body-parser');
const session = require('express-session');

//rutas de los modulos
const Ruta_home = require('./routers/home');
const Ruta_guardar_registro = require('./routers/registrar_ingresos');
const Ruta_registro = require('./routers/registrar_personas_elementos');
const Ruta_reports = require('./routers/reports');
const Ruta_users = require('./routers/users');

var Servidor = express();

Servidor.set('view engine', 'ejs');
Servidor.set('views',__dirname+'/views');

Servidor.use(body_parser.json());
Servidor.use(body_parser.urlencoded({extended:true}));

Servidor.use(session({
    secret:"_Password_Proyecto_Formativo",
    resave:true,
    saveUninitialized:true
}));

Servidor.use(express.static(__dirname+'/public'));

Servidor.get('/', (peticion, respuesta)=>{
    respuesta.render('signin');
});

Servidor.use('/home', Ruta_home);
Servidor.use('/registrar_ingreso', Ruta_guardar_registro);
Servidor.use('/registrar_personas', Ruta_registro);
Servidor.use('/reportes', Ruta_reports);
Servidor.use('/users', Ruta_users);

Servidor.listen(3000, ()=>{
    console.log("El servidor inicio en el puerto 3000")
})