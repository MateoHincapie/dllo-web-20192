const express = require('express')
const app = express()

/**
 * Middleware: Se ejecuta antes de ingresar a cualquier endpoint.
 */
app.use('/', (request, response, next) => {
    // response.send("saludos desde api")
    console.log("Pasó por acá")
    next()
})

const enrutador_operaciones = require('./routes/operaciones.js')

app.use(enrutador_operaciones)

app.use("/", (request, response) => {
    console.log("No se encontró")
    response.status(404).send("No se encontró")
})

const port = 3100
app.listen(port, ()=>{
    console.log('El servidor se está ejecutando en el puerto: '+port)
})