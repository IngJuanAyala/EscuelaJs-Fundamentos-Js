var nombre = 'Sacha', apellido = 'Lifszyc'

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

var str = nombre.substr(1, 2)


var sacha = 
	{
		nombre: 'Sacha',
		apellido: 'Lifszyc', 	 
		edad: '28'		
	}
var dario =
	{
		nombre: 'Dario',
		apellido: 'Soto',
		edad: '28'
	}
var yo = 
	{
		nombre: prompt("Ingresa tu nombre"),
		apellido: prompt("Ingresa tu apellido"),
		edad: prompt("Ingresa tu edad")
	}
functionImprimirNombreYEdad(persona)
	{
		var {nombre, edad} = persona
		console.log(`Hola, me llamo ${nombre} y tengo ${edad} años.` )
	}
ImprimirNombreYEdad(sacha)
ImprimirNombreYEdad(dario)
ImprimirNombreYEdad(yo)