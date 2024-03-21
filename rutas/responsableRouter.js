const express = require('express');
const responsableController = require('../controladores/responsableController');
const router = express.Router();

router.get('/', responsableController.obtenerDatos);
router.get('/id:id', responsableController.obtenerPorId);
router.get('/numEmpleado:num', responsableController.obtenerPorNumeroEmpleado);
router.post('/', responsableController.agregarResponsable);
router.put('/id:id', responsableController.actualizarResponsable);
router.delete('/id:id', responsableController.eliminarResponsable);

module.exports = router;