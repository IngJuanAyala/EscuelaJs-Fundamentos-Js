const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true }

//Promesas para dominar los callbacks

function obtenerPersonaje(id){
    return new Promise((resolve, reject) =>{//Prometo que aquí habrá información, todavía no me ha llegado porque viene de un servidor externo, si no utilizo la promesa, entonces me dará error cuando quiera ejecutar las funciones con la data, cuando te llegue la información, por favor haz lo siguiente con ella:
        url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $.get(url, opts, function(data){
            resolve(data)//Si llega sin ningun error a la ejecucion de la funcion que esta abajo pasale la data
        })
        .fail(() => reject(id))//Si llega un error pasale a la ejecucion el id del personaje para mostrarle que hay un error
            
        });    

   
   
};

function onError(id){
console.log(`sucedio un error al obtener el personaje ${id}`)
}

obtenerPersonaje(1)
.then(function(personaje){//data recibida, esta linea de codigo es la amiga de.. resolve(data)
    console.log(`El personaje es ${personaje.name}`);
})
.catch(onError)//Data no recibida, mostrare un error, gracias por enviarme la id para usarla para mostrar el error,   .catch y fail son amigos
