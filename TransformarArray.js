var alejandro = {
    nombre: 'Alejandro',
    apellidos: 'González Reyes',
    altura: 1.72
}

var fernanda = {
    nombre: 'Fernanda',
    apellidos: 'Flores Castillo',
    altura: 1.50
}

var vicky = {
    nombre: 'Virginia',
    apellidos: 'Moreno Valle',
    altura: 1.55
}

var paula = {
    nombre: 'Paula',
    apellidos: 'Mondragón Figueroa',
    altura: 1.75
}

var daniela = {
    nombre: 'Daniela',
    apellidos: 'Popoca Samaniego',
    altura: 1.77
}

var maria = {
    nombre: 'María Daniela',
    apellidos: 'Reyes Reyes',
    altura: 1.47
}

var mateo = {
    nombre: 'Mateo',
    apellidos: 'González Villareal',
    altura: 1.71
}

var personas = [alejandro, fernanda, vicky, paula, daniela, maria, mateo]

// 2- Función para realizar la transformación de los elementos del arreglo. Es importante retornar el valor transformado para que implicitamente sea empujado a la variable asignada
var alturaCentimetros = persona => {
    // En este caso tengo que retornar un nuevo objeto, ya que si hago la transformación directamente su propiedad altura, estaría modificando el el objeto original.
    // Recordar que los objetos se pasan por referencia. ENTONCES LA FUNCIÓN MAPER recibe el objeto original
    return {
        ...persona,
        altura: persona.altura * 100
    }
}

// Importante: Esta es otra alternativa, como la función solo retorna un objeto, no puedo declrar solamente las llaves, ya que se interpreta como el cuerpo de la función. Para ello, encierro las llaves entre parentesis.
var alturaCentimetros = persona => ({
    ...persona,
    altura: persona.altura * 100
})

// 1- Transformar los elementos de un arreglo, consta de un arreglo donde se colocarán las nuevos elementos transformados y una función, misma que contenga la lógica para realizar dicha transformación
var personasMapeadas = personas.map(alturaCentimetros)

console.log('Datos orginales', personas)

// La intensión es mostrar una copia de mis objeto personas con altura en centímetros
console.log('Datos Modificados', personasMapeadas)



/// En este otro ejemplo, el arreglo contiene elementos de tipo primitivo. Por tanto, basta con retornan el elemento tranformado. Puesto que el parametro que recibe la función maper se le pasa por valor 

var numeros = [2,4,6,8,10]

var doble = numeros.map(function(numero) {
    return numero * 2
})

console.warn('Numeración original', numeros)
console.log('Números al doble', doble)