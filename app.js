//Modulos de terceros
require('dotenv').config(); //Toma el archivo .env y crea las variables de entorno para la aplicación.
//const express = require('express')
//Modulos - Clases de la aplicación
const Server = require('./models/server');
//const app = express()

//creo un interceptor para que redireccione a páginas estáticas:
//app.use(express.static('public')); //Busca de forma predeterminada SIEMPRE el archivo index.html

const server = new Server();

server.start();

/*
Cuenta de Github para hacer un git remote y poder linkearlo con Heroku y subirlo a un server de prueba gratuito.
Usuario: nicolas.fogolin@gmail.com
Password: Martoneto_349
*/