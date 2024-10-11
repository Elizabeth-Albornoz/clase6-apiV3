const seriesSchema = require('./src/schemas/series.schemas')

const resultado = seriesSchema.validate(
{
    nombre: 'Gerardo',
    plataforma: 'Netflix',
    disponible: false
},
{abortEarly:false}
)

console.log(resultado)