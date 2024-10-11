//funcion que retorna otra
const schemaValidator = (schema) => {
    //primero va a devolver una funcion de middleware
    return (req, res, next) => {
        const result = schema.validate(req.body, {abortEarly:false})
        if(result.error){
            return res.status(400).json({
                //le mandamos sobre que atributo y el error
                errores: result.error.details.map(e => {
                    return {atributo: e.path[0], error: e.message}
                })
            })
        }
        next()
    }
}

module.exports = schemaValidator