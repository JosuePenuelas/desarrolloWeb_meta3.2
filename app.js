//http://localhost:4000/
const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());

const activoRouter = require('./rutas/activoRouter');
const responsableRouter = require('./rutas/responsableRouter');
const ubicacionRouter = require('./rutas/ubicacionRouter');

app.get('/', (req, res) => {
    res.send('Meta 3.1: Implementar un servicio web REST')
});

app.use("/activos", activoRouter);
app.use("/responsables", responsableRouter);
app.use("/ubicaciones", ubicacionRouter);


app.listen(port, () => {
    console.log('Servidor escuchando el puerto:', port)
}).on('error', err => {
    console.log('Error al iniciar el servidor:', err)
});