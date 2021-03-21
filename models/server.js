const express = require('express');
const cors = require('cors');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios'; //Puedo especificar acá las rutas para que quedo todo más claro
                                            //y accesible desde el contructor para un desarrollador.

        //Middlewares (Intermediarios)
        this.middlewares();
        //Rutas de mi aplicación
        this.routes();
    }

    middlewares(){
        //Sirve como middleware de control de accesos, utiliza lista negra, lista blanca.
        this.app.use(cors());

        //Mid. para leer y parsear el body de un post. Cualquier cosa que entre va a intentar serializarlo
        //en formato Json
        this.app.use(express.json());

        this.app.use(express.static('public')); //Esto lo que va a hacer es redireccionar al index.html de 
                                                //la carpeta public automtica// si entran sin indicar una 
                                                //ruta declarada en routes().
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    start(){
        this.app.listen(this.port, ()=>{
            console.log('Escuchando puerto: '+ this.port);
        });
    }
}

module.exports = Server;