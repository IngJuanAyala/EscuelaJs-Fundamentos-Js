const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

var idp;

const opts = { crossDomain: true }
obtenerId();
function obtenerId(){
    idp = prompt('ingresa tu id');//Aqui solicite la ID
    idp = parseInt(idp);//Converti el string que me dio el prompt en un number

    peticionPruebaPromt();//Llame a la ejecuccion de la funcion
    
}

console.log(idp)

function peticionPruebaPromt(){
    url = `${API_URL}${PEOPLE_URL.replace(':id', idp)}`//Inclui la variable IDP
    $.get(url, opts, function(data){
        console.log(data.name);//Mostre el nombre exitosamente
    });
}