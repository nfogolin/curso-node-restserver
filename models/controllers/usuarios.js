const { response } = require('express');

const usuariosGet = (req, res = response) =>{
    const params = req.query; //paramatros de la forma ?q=hola&par=pepe
    //const { q, par = 'Valor Predeterminado' } = req.query;
    res.json({
        msg: 'GET en REST - desde Controlador',
        params
    });
}

const usuariosPost = (req, res = response) =>{
    //const body = req.body;
    const { nombre, edad } = req.body; //al aplicar destructuración se pueden extraer solo los datos que nos interesan
    res.json({
        msg: 'POST en REST - desde Controlador',
        //body
        nombre,
        edad
    });
}

const usuariosPut = (req, res = response) =>{
    const id = req.params.id; //Si hay más params se pueden desestructurar para obtenerlos
    res.json({
        msg: 'PUT en REST - desde Controlador',
        id
    });
}

const usuariosPatch = (req, res = response) =>{
    res.json({
        msg: 'PATCH en REST - desde Controlador'
    });
}

const usuariosDelete = (req, res = response) =>{
    res.json({
        msg: 'DELETE en REST - desde Controlador'
    });
}



module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}
