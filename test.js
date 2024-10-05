const numeros = [1,3,6,7]

//esos argumentos se pueden iterar
const sumar = (...argumentos) =>{
    let acum = 0
    argumentos.forEach(e => acum += e)
    return acum
}


console.log(...numeros) //operador pred ... que convierte un array en 
//multiples valores que pueden ser pasados a funciones que reciven muchos argumentos 
console.log(Math.min(...numeros))

