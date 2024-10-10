const series = require('../../data/series.json') //el controlador accede a los datos
const {Series} = require('../models/')
const controller = {}
controller.series = series 

const getAllSeries = async(req,res) => {
    //await porque se tiene que quedar esperando el resultado
    //para usar await tiene que estar dentro de un contexto asincronico async()
    const data = await Series.findAll({}) //recibe un objeto vacio cuando quiere recuperar todos
    res.status(200).json(data)
}
controller.getAllSeries = getAllSeries

const getSerieById = async(req,res) => {
    const id = req.params.id
    const serie = await Series.findByPk(id)
    res.status(200).json(serie)
}
controller.getSerieById = getSerieById

const deleteById = (req,res) => {
    const id = req.params.id
    const idx = series.findIndex(series => series.id == id)
    series.splice(idx, 1) //el splice produce un efecto en el array 
    res.status(204)
}
controller.deleteById = deleteById

const createSerie = (req,res) =>{
    //req.body //todos los datos del obj
    const {nombre, plataforma} = req.body //desestructurado
    const ids = series.map(serie => serie.id) //convertimos los id a nro 
    const serie = {
        id: ids.length == 0 ? 1 : Math.max(...ids) + 1, 
        nombre,
        plataforma,
        disponible:false,
    }
    series.push(serie)
    res.status(201).json(serie)
}
controller.createSerie = createSerie

//llaves para exportar varios objs
//module.exports = {getAllSeries , getSerieById, deleteById} //otra manera de hcaerlo
module.exports = controller

