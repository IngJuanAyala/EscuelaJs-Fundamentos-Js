// ES6 trae consigo la definición de clases. Sin embargo, detrás de bambalinas es un wrapper para crear prototipos de JS. Es decir, solo es azucar sintáctico para que los desarrolladores que vienen desde otros lenguajes les sea mas sencillo trabajar el paradigma de orientación a objetos en JS.



// Definicion del cuerpo de la clase Persona
class Persona{
    // Definición del método constructor para inicializar las propiedades de dicha clase
    constructor(nombre, apellidos, altura, edad) {
        // El contexto de this es el propio objeto instanciado de esta clase
        this.nombre = nombre
        this.apellidos = apellidos
        this.altura = altura
        this.edad = edad
        // El estado inicial de un objeto puede declararse de forma dura, es decir, todos los objetos instanciados de esta clase tendrán al inicio el mismo valor para esta propiedad
        this.saldo = 200
    }

    // Definición de metodos (acciones) para esta clase
    saludar() {
        console.log(`Hola, me llamo ${this.nombre}${this.apellidos}`)
    }

    tieneEstaturaAlta() {
        if (this.altura > 1.8) {
            console.log(`${this.nombre} es de estatura alta`)
        } else {
            console.log(`${this.nombre} es de estatura baja a media`)
        }
    }

    // Ejemplo de metodo setter
    setSaldo(saldo) {
        this.saldo += saldo
        console.log(`${this.nombre}, gracias por tu recarga. Tu saldo ahora es de $ ${this.saldo.toFixed(2)}`)
    }

    consultarSaldo() {
        console.log(`${this.nombre}, tu saldo es de $ ${this.saldo.toFixed(2)}`)
    }
}



// ES6 también trae consigo el concepto de herencia entre clases. Sin embargo, recordar que en JS no existe como tal, siempre se trabaja con prototipos, y la unica herencia que existe es la herencia prototipal.
class DesarrolladorextendsPersona{
    constructor(nombre, apellidos, altura, edad, titulo, tecnologias) {
        // Una clase que extiende de otra, esta obligada a invocar al constructor de su clase padre con el método super. Así como pasarle los parámetros necesarios para que esta se pueda inicializar
        super(nombre, apellidos, altura, edad)
        // La clase hija puede aumentar su propio estado, es decir, tener otras propiedades sumadas a las que extiende
        this.titulo = titulo
        this.tecnologias = tecnologias
    }

    // Sobre-escritura
    // Funciona igual que en otros lenguajes de programación, basta con redefinir nuevamente alguno de los metodos definidos en la clase padre
    saludar() {
        console.warn(`Hola, soy ${this.nombre}${this.apellidos} y soy ${this.titulo}`)
    }

    // La clase hija puede definir sus propias acciones o metodos
    mostrarTecnologias() {
        console.log(`${this.nombre} tiene experiencia en las siguientes tecnologías: ${this.tecnologias.join(', ')}`)
    }
}


// Crear un objeto de la clase Persona
var alejandro = new Persona('Alejandro', 'González Reyes', 1.72, 34)
// Crear un objeto de la clase Desarrollador
var daniel = new Desarrollador('Daniel', 'Osorno Medina', 1.87, 39, 'Ingeniero en Sistemas', ['base de datos', 'redes', 'sistemas de gestión empresarial'])


console.log(alejandro)
console.log(daniel)

// El método saludar difiere en ambos casos, ya que se sobre-escribió en la clase Desarrollador
alejandro.saludar()
daniel.saludar()

// los metodos tieneEstaturaAlta se comportan de manera similar. Recordar que la clase Desarrollador hereda este metodo de la clase Persona
alejandro.tieneEstaturaAlta()
daniel.tieneEstaturaAlta()

alejandro.consultarSaldo()
daniel.consultarSaldo()

alejandro.setSaldo(299)
daniel.setSaldo(477.50)

// El objeto daniel es de tipo Desarrollador, por tanto, tiene el metodo mostrarTecnologias.
daniel.mostrarTecnologias()