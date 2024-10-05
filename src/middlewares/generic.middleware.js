const middleware = {}

const requestTime = (req, _, next) => { //guion bajo para indicar que no se usa el parámetro
    console.log({url: req.url, fechaHora: new Date()})
    next()
}
middleware.requestTime = requestTime

module.exports = middleware