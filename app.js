const express = require('express');
const body_parser = require('body-parser');
const session = require('express-session');
const Ruta_registro = require('./routers/register_elementos');
const Ruta_reports = require('./routers/reports');
<<<<<<< HEAD
const Ruta_usuario = require('./routers/usuarios');
const Ruta_help = require('./routers/help');
const Ruta_index = require('./routers/index');

=======
const Ruta_users = require('./routers/users');
const Ruta_help = require('./routers/help');
>>>>>>> f4c72fe9b5dbe1705bdfd04f0d793556ccd4f24c

var Servidor = express();

Servidor.set('view engine', 'ejs');
Servidor.set('views',__dirname+'/views');

Servidor.use(body_parser.json());
Servidor.use(body_parser.urlencoded({extended:true}));

Servidor.use(session({
    secret:"_Password_Profecto_Formativo",
    resave:false,
    saveUninitialized:false
}));

Servidor.use(express.static(__dirname+'/public'));

Servidor.use(body_parser.urlencoded({extended:true}));
Servidor.set(body_parser.json());

Servidor.get('/', (peticion, respuesta)=>{
    respuesta.render('index');
});

Servidor.use('/registro', Ruta_registro);
<<<<<<< HEAD
Servidor.use('/reports', Ruta_reports);
Servidor.use('/help', Ruta_help);
Servidor.use('/',Ruta_index);
Servidor.use('/signup',Ruta_usuario);
;
=======
Servidor.use('/reportes', Ruta_reports);
Servidor.use('/users', Ruta_users);
Servidor.use('/help', Ruta_help);
>>>>>>> f4c72fe9b5dbe1705bdfd04f0d793556ccd4f24c

Servidor.listen(3000, ()=>{
    console.log("El servidor inicio en el puerto 3000")
})