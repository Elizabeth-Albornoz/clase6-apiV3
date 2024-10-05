const series = require('../../data/series.json') //el controlador accede a los datos
const controller = {}
controller.series = series 

const getAllSeries = (req,res) => {
    res.status(200).json(series)
}
controller.getAllSeries = getAllSeries

const getSerieById = (req,res) => {
    const id = req.params.id
    const serie = series.find(serie =>serie.id == id)
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

