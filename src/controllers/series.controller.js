const {Series} = require('../models/')
const controller = {}

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

const deleteById = async (req,res) => {
    const idSerie = req.params.id
    //aca ya se paso por el middleware que valida que el id existe, entonces simpre se borrara
    // el where es un obj que tiene como propiedad otro objeto
    const r = await Series.destroy({where: {id:idSerie}}) 
    res.status(204).json({mensaje: `filas afectadas: ${r}`})
}
controller.deleteById = deleteById

const createSerie = async (req,res) =>{
    //req.body //todos los datos del obj
    const {nombre, plataforma, disponible} = req.body //desestructurado
    const serie = await Series.create({
        nombre,
        plataforma,
        disponible
    })
    res.status(201).json(serie)
}
controller.createSerie = createSerie

const updateSerie = async (req, res) => {
    const {nombre, plataforma, disponible} = req.body
    //cuando actualizamos el id lo mandamos a la url, y todo el obj en el body
    const idSerie = req.params.id
    //otra forma de hacerlo -> const serie = {...await Serie.findByPk(idSerie), req.body}
    const serie = await Series.findByPk(idSerie)
    //ahora al obj serie lo pisamos con los valores que entran en el body
    serie.nombre = nombre;
    serie.plataforma = plataforma;
    serie.disponible = disponible;
    await serie.save()
    res.status(200).json(serie)
}
controller.updateSerie = updateSerie

//llaves para exportar varios objs
//module.exports = {getAllSeries , getSerieById, deleteById} //otra manera de hcaerlo
module.exports = controller

