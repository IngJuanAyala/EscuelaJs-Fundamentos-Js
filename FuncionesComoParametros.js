const MAYORIA_DE_EDAD = 18

class Persona{
    
    constructor(nombre, apellidos, edad) {
        this.nombre = nombre
        this.apellidos = apellidos
        this.edad = edad
    }

    // El método saludar recibe como parámetro una función, la cual se ejecutará en alguna parte según la lógica declarada
    saludar(callback) {
        // this representa este objeto, por tanto, podemos indicar que atributos necesitamos de el y guardarlos en variables
        var {nombre, apellidos} = this

        console.log(`Hola, que tal soy ${nombre}${apellidos}`)
        
        // El parámetro pasado al metodo saludar es opcional, por tanto verificamos su presencia
        if (callback) {
            // De estar presente la función como parámetro, la invocamos y le pasamos sus parámetros. En este caso al tratarse de una persona, no es considerada como DEV, por tanto el tercer parametro es false
            callback(nombre, apellidos, false)
        }
    }

    esMayorDeEdad() {
        if(this.edad >= MAYORIA_DE_EDAD) {
            console.log(`${this.nombre} es mayor de edad`)
        } else {
            console.error(`${this.nombre} huele a pañal, pues es menor de edad`)
        }
    }
}

class DesarrolladorextendsPersona{
    constructor(nombre, apellidos, edad, lenguajes) {
        super(nombre, apellidos, edad)
        this.lenguajes = lenguajes
    }

    saludar(callback) {
        var {nombre, apellidos} = this
        console.warn(`Hola, mi nombre es ${nombre}${apellidos} y soy desarrollador/a`)

        // Nuevamente verificamos que la función se haya pasado como parámetro a al metodo saludar
        if (callback) {
            // Invocamos la función, indicando que se trata de un DEV, (true)
            callback(nombre, apellidos, true)
        }
    }

}


// Declaración de la función que se enviará como parámetro al método saludar de cada uno de los objetos creados a continuación. Al invocarse la función dentro del metodo saludar, esta se le deben pasar 3 parametros para que pueda trabajar
var responderSaludo = function(nombre, apellidos, esDev) {
    console.log(`Buen día, ${nombre}${apellidos}`)
    if (esDev) {
        console.log(`Vaya vaya, con que eres desarrollador/a`)
    }
}

var alejandro = new Desarrollador('Alejandro', 'González Reyes', 34)
var ximena = new Persona('Ximena', 'Torres Fuentes', 25)
var beto = new Desarrollador('Beto', 'Molina Prieto', 16)


// JS no nos obliga a que un parámetro sea obligatorio, si no lo encuentra, lanza undefined, que es considerado como false.
// Invoco el metodo saludar de cada uno de mis objetos creados, sin embargo, no estoy obligado a pasar la funcion como parametro para que se responda a mi saludo
alejandro.saludar()
ximena.saludar(responderSaludo)
beto.saludar(responderSaludo)


alejandro.esMayorDeEdad()
ximena.esMayorDeEdad()
beto.esMayorDeEdad()

/** NOTAS
 * 
 * Cuando se pasa una función como parámetro a otra función, no se debe pasar con sus respectivos paréntesis, ya que se estaría invocando en ese mismo lugar.
 * El responsable de invocar la función pasada es el metodo que la recibe, y el decide en que lugar de su cuerpo ha de llamarla.
 * 
 * Si la función recibe parámetros, estos son pasados o proporcionados desde la función que recibe la función como parámetro... (ver metodo saludar)
 */