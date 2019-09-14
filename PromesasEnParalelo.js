const SW_API_URL = 'https://swapi.co/api/'
const PLANETA_URL = 'planets/:id'

const CONNECTION = { crossDomain: true}

function obtenerPlanetas(id) {
  returnnewPromise((resolve,reject)=>{
    const URL_SW = `${SW_API_URL}${PLANETA_URL.replace(':id',id)}`
    $
     .get(URL_SW,CONNECTION,function (planeta) {
       resolve(planeta)
     })
     .fail(()=>reject(id))
  })
}

var Planetas = [1,2,3,4,5,6,7,8,9,10]

var Promesas_Planetas = Planetas.map( (numero) => obtenerPlanetas(numero))

function PlanetaSuccess(planeta) {
  for (var i = 0; i < planeta.length; i++) {
    console.log(`El planeta ${i+1} es ${planeta[i].name}`)
  }
}

function PlanetaReject(id) {
  console.log(`Error al obtener el planeta ${id}`)
}

Promise
 .all(Promesas_Planetas)
 .then(PlanetaSuccess)
 .catch(PlanetaReject)