const express = require('express');
const Ruta_registro = require('./routers/register_elementos');
const Ruta_reports = require('./routers/reports');
const Ruta_usuario = require('./routers/usuarios');
const Ruta_help = require('./routers/help');
const Ruta_index = require('./routers/index');


var Servidor = express();

Servidor.set('view engine', 'ejs');
Servidor.set('views',__dirname+'/views');

Servidor.use(express.static(__dirname+'/public'));

Servidor.use(body_parser.urlencoded({extended:true}));
Servidor.set(body_parser.json());

Servidor.get('/', (peticion, respuesta)=>{
    respuesta.render('index');
});

Servidor.use('/registro', Ruta_registro);
Servidor.use('/reports', Ruta_reports);
Servidor.use('/help', Ruta_help);
Servidor.use('/',Ruta_index);
Servidor.use('/signup',Ruta_usuario);
;

Servidor.listen(3000, ()=>{
    console.log("El servidor inicio en el puerto 3000")
})