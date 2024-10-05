const {series} = require('../controllers/series.controller')
const middleware = {}

const validaExisteIdSerie = (req, res, next) => {
    const id = req.params.id
    const serie = series.find(serie => serie.id == id)
    if (!serie)
        return res.status(404).json(`El ${id} no existe`) //retun para que finalize el codifo
    next() // si el id existe se invoca la funcion next
}
middleware.validaExisteIdSerie = validaExisteIdSerie

module.exports = middleware
