let Juan = {
    nombre: 'JuanAyalita',
    edad: 35
}

function siEsMayorDeEdad(yo) {
    if(yo.edad >= 18) {
        console.log('Juan es mayor de edad (Está como el vino).')
    } else {
        console.log('Es menor de edad.')
    }
}

siEsMayorDeEdad(Juan) // Devuelve = Juan es mayor de edad (Como el vino mijo!).