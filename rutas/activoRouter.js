const express = require('express');
const activoController = require('../controladores/activoController');
const router = express.Router();

router.get('/', activoController.obtenerDatos);
router.get('/id:id', activoController.obtenerPorId);
router.get('Numserie:serie', activoController.obtenerPorNumSerie);
router.post('/', activoController.agregarActivo);
router.put('/id:id', activoController.actualizarActivo);
router.delete('/id:id', activoController.eliminarActivo);

module.exports = router;