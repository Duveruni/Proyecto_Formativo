const express = require('express');
const Ruta_registro = require('./routers/register_elementos');
const Ruta_reports = require('./routers/reports');

var Servidor = express();

Servidor.set('view engine', 'ejs');
Servidor.set('views',__dirname+'/views');

Servidor.use(express.static(__dirname+'/public'));

Servidor.get('/', (peticion, respuesta)=>{
    respuesta.render('index');
});

Servidor.use('/registro', Ruta_registro);
Servidor.use('/reportes', Ruta_reports);

Servidor.listen(3000, ()=>{
    console.log("El servidor inicio en el puerto 3000")
})