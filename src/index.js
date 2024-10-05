const express = require('express')
const routes = require('./routes')
const {genericMiddleware} = require('./middlewares')
const app = express() //devuelve un ob
const PORT = 3000

app.use(express.json()) //por defecto toda la info del body la maneje como un json

//gestionar rutas
app.use(genericMiddleware.requestTime)
app.use(routes.serieRoute)
app.use(routes.usuariosRoute)

//sobrecargado, puerto y funcion de callback 
app.listen(PORT, () => {
    console.log(`Aplicacion iniciada en el puerto ${PORT}`)
})