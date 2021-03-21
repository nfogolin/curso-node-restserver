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