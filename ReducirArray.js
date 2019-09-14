// Aqui creamos la funcion que se encargara de tener la cantidad de libros en total de todas las personas que tienen u leen libros
// necesitamos 2 valores por ende usaremos un parentecis(contador, persona) => contador += persona.propiedad(en este caso los libros que posee)
const cantidadDeLibros = (contador, persona) => contador += persona.libros;
// La otra forma de hacerlo aun mas sencillo es esta
const cantidadDeLibros2 = (contador, {libros}) => contador += libros;

// Supongamos que nosotros queremos saber el total de un valor en concreto de los datos que tenemos, como ej usaremos que cada persona lee libros o posee libros
// En este punto ahora solo queremos saber el valor que tiene cada uno y sacar un total de todas las personas que poseen esa propiedad o caracteristica que tambien puede ser que tengan hijos o no, todo depende del caso que nosotros queramos resolver o crear una solucion para tener ese dato total
// El unico fin que tiene la funcion reduce es obtener un valor total de algun dato u cantidad de cosas que poseemos en total
// Pongamos que quiero recibir un total de todos los autos que tienen todas las personas que estan en mi cajita de personitas, entonces para esa instancia usaria un reduce en la cajita y creo una funcion que se encargara de obtener esos valores, tambien tengo que indicarle en que posicion de mi cajita empezara a obtener los datos en este punto nosotros usamos el 0
// iniciara desde el primer dato que se creo en nuestra cajita, asi que primero creamos una funcion que se encarge de proveernos ese valor que nosotros queremos en este punto nosotros necesitamos saber el total de libros de las personas
// Creamos una funcion que se encarga de tener las cantidades de libros y devolvernos ese resultado para esto creamos una funcion anonima, aparte de nosotros haber creado la funcion tenemos que ahora darle desde que punto nosotros queremos obtener el total en este caso queremos todos empezando desde el inicio (0) final(cajita -1)
var totalDeLibros = personas.reduce(cantidadDeLibros2, 0);

console.log(totalDeLibros);