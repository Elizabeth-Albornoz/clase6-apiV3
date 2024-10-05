const { Router } = require('express') //cuando requerimos solo un obj que esta dentro de express
const route = Router() //ahora lo usamos como funcion 
const seriesController = require('../controllers/series.controller') //recupero el controlador 
//const {getAllSeries, getSerieById} = require('../controllers/series.controller') //otra manera es desestructurarlo si no lo queremos completo
const {seriesMiddleware} = require('../middlewares')

//gestiona controllers
route.get('/series', seriesController.getAllSeries)
route.get('/series/:id', seriesMiddleware.validaExisteIdSerie, seriesController.getSerieById)
route.delete('/series/:id', seriesMiddleware.validaExisteIdSerie, seriesController.deleteById)
route.post('/series', seriesController.createSerie)

//damos visibilidad para que otros archivos lo puedan importar
module.exports = route
