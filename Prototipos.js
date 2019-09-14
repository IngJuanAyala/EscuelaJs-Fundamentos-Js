function persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
    }
  
  persona.prototype.esAlta = function () {
  
     if (this.altura > 1.80) {
         console.log(`Hola me llamo ${this.nombre}${this.apellido} y soy alto`)
          }else {
          console.log(`Hola me llamo ${this.nombre}${this.apellido} y soy pequeño`)
          }
  }
  
  
  var paul = new persona ('Paul', 'Gavidia', 1.87)
  var daniel = new persona ('Daniel', 'Narvaez', 1.80)
  var ricardo = new persona ('Ricardo', 'Teran', 1.70)
  var miguel = new persona ('Miguel', 'Andrade', 1.58)
  var jefferson = new persona ('Jefferson', 'Villareal', 1.90)








  console.log(`-- Clase 23: Modificando Prototipos --\n`);

  function Persona(nombre, apellido, edad, estatura) {
      this.nombre = nombre
      this.apellido = apellido
      this.edad = edad
      this.estatura = estatura
  }
  
  const ALTO = 1.8
  
  Persona.prototype.saludar = function () {
      console.log(`Hola, me llamo ${this.nombre}${this.apellido} y tengo ${this.edad} años.`);
  }
  
  Persona.prototype.soyAlto = function () {
      returnthis.estatura >= ALTO
  } 
  
  var persona = new Persona(prompt('Nombre: '), prompt('Apellido: '), prompt('Edad: '), prompt('Estatura: '))
  persona.saludar()
  persona.soyAlto()