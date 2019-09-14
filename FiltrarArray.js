//      clase 18 Filtrar un array
/* En esta clase aprenderemos como filtrar los arrays.
 Para filtrar siempre necesitamos establecer una condición. 
 En este ejemplo nuestra condición es que la estatura de las personas sea mayor de 1.80mts.

El método filter ( ) crea una nueva matriz con todos los elementos que pasan la prueba implementada por la función proporcionada.

Recuerda que si no hay elementos que pasen la prueba, filter devuelve un array vacío.

Reto: escribe el filtrado de personas bajas.*/

var persona1 = {
    nombre: 'fercho Conto',
    edad: 30,
    profesion: 'programador',
    altura: 1.89
}

var persona2 ={
nombre: 'Maye Mena',
edad: 46,
profesion: 'enfermera',
altura: 1.70
}

var persona3 ={
nombre: 'marisa pazo' ,
edad: 44,
profesion: 'camaera',
altura: 1.73
}
var persona4 ={
nombre: 'francisco perez',
edad: 46,
profesion: 'enfermera',
altura: 1.76
}

var persona5 ={
nombre: 'Daniel Lemus',
edad: 15,
profesion: 'Enfermera Superior',
altura: 1.80
}

var persona6={
nombre: 'Camila Mena',
edad: 45,
profesion: 'Ama de Casa',
altura: 1.82
}

const esAlta = persona => persona.altura > 1.8

var personas = [persona1, persona2, persona3, persona4, persona5,persona6]

var personasAltas = personas.filter(esAlta)

console.log(personasAltas)

// desafio
const esBaja = persona => persona.altura < 1.8

var personasBajas = personas.filter(esBaja)
console.log(personasBajas)