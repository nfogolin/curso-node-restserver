//Rutas relacionadas a, por ejemplo, usuarios.
const { Router } = require('express');
const { usuariosGet, 
    usuariosPut, 
    usuariosPost, 
    usuariosDelete,
    usuariosPatch } = require('../models/controllers/usuarios');

const router = Router();

//Dependiendo de como se haga la petición al RestServer la aplicación identificará
//la url y la acción para saber que controlador ejecutar:
//GET
router.get('/', usuariosGet);
//PUT
router.put('/:id', usuariosPut);
//POST
router.post('/', usuariosPost);
//DELETE
router.delete('/', usuariosDelete);
//Hay muchas más acciones REST, por ejemplo:
//PATCH
router.patch('/', usuariosPatch);

//Se puede enviar a proposito un codigo de estado (según tabla) para indicar algún error
//al que consume el servicio REST.
/*
router.get('/api2', function (req, res) {
    res.status(403).json({
        msg: 'No auntenticado'
    });
});
*/





module.exports = router;