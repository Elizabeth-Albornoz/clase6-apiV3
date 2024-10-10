const express = require('express')
const routes = require('./routes')
const {genericMiddleware} = require('./middlewares')
const db = require('./models') //nos traemos la db para sincronizar
const app = express() //devuelve un ob
const PORT = 3000

app.use(express.json()) //por defecto toda la info del body la maneje como un json

//gestionar rutas
app.use(genericMiddleware.requestTime)
app.use(routes.serieRoute)
app.use(routes.usuariosRoute)

//sobrecargado, puerto y funcion de callback 
//ademas, vamos a hacer que se sincronice async() el modelo con la db
app.listen(PORT, async () => {
    console.log(`Aplicacion iniciada en el puerto ${PORT}`)
    //Esto lo hacemos solo en desarrollo para sincronizar el modelo con la db
    //descomentar solo cuando hay cambios en el modelo OJO!
    //db.sequelize.sync({force:true})
})