const {Series} = require('../models')
const middleware = {}

const validaExisteIdSerie = async(req, res, next) => {
    const id = req.params.id
    const serie = await Series.findByPk(id)
    console.log(serie)
    if (!serie)
        return res.status(404).json(`El ${id} no existe`) //retun para que finalize el codifo
    next() // si el id existe se invoca la funcion next
}
middleware.validaExisteIdSerie = validaExisteIdSerie

module.exports = middleware
