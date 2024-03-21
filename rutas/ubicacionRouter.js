const express = require('express');
const ubicacionController = require('../controladores/ubicacionController');
const router = express.Router();

router.get('/', ubicacionController.obtenerDatos);
router.get('/id:id', ubicacionController.obtenerPorId);
router.post('/', ubicacionController.agregarUbicacion);
router.put('/id:id', ubicacionController.actualizarUbicacion);
router.delete('/id:id', ubicacionController.eliminarUbicacion);

module.exports = router;