const Joi = require('joi')

//definimos restricciones 
const seriesSchema = Joi.object().keys(
    {
        //entre 3 y 255 caracteres, requerido y no vacio
        nombre: Joi.string().required().min(3).max(255).messages({
            "any.required" : "Nombre es requerido",
            "string.min" : "Nombre no debe ser menor a {#limit} caracteres",
            "string.max" : "Nombre no debe ser mayor a {#limit} caracteres",
            "string.empty" : "Nombre no puede ser vacio"
        }),
        //solo 3 -> netflix, flow, star+, requerido y no vacio
        plataforma: Joi.string().required().valid("Netflix", "Star+", "Flow").messages({
            "any.required" : "Plataforma es requerido",
            "any.only" : "Las plataformas disponibles son Netflix, Star+, Flow"
        }),
        //boolean, requerido
        disponible: Joi.boolean().required().messages({
            "any.required" : "Disponible es requerido"
        })
    }
)

module.exports = seriesSchema