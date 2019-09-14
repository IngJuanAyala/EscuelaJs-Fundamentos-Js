const API = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
 
const opts = {crossDomain: true}

const Response = function (personaje){
    console.log(`Hola yo soy, ${personaje.name}`);
    
}

function ObtenerPersonaje (id, callback){
    const UrlPersonaje = `${API}${PEOPLE_URL.replace(':id', i)}`
    $.get(UrlPersonaje, opts, callback ).fail(function (){
        console.log(`Sucedió un error`)
    })
}

NumeroDeSolicitudes = 100

for(i = 1; i < NumeroDeSolicitudes; i++){
    ObtenerPersonaje(i, function (personaje){
        console.log(`Hola yo soy, ${personaje.name}`)
        ObtenerPersonaje(i+1, function (personaje){
            console.log(`Hola yo soy, ${personaje.name}`)
            
        })
    })
}