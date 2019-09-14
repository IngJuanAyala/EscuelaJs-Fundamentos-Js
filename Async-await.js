const SW_API_URL =  'https://swapi.co/api/'
const PLANETA_URL = 'planets/:id'

const CONNECTION = { crossDomain: true }

function Planetas(id){
  returnnewPromise((resolve,reject)=>{
    const OBTENER_PLANETA_URL = `${SW_API_URL}${PLANETA_URL.replace(':id',id)}`
    $
     .get(OBTENER_PLANETA_URL,CONNECTION,function (planeta) {
        resolve(planeta)
     })
     .fail(()=>reject(id))
  })
}

function Error_Planeta(numero) {
  console.log(`No se pudo obtener planeta ${numero}`)
}


async function ObtenerPlanetas(){
  var ids_planetas = [1,2,3,4,5,6,7,8,9,10]
  var promesas_planetas = ids_planetas.map(id => Planetas(id))
  try{
    var planetas = await Promise.all(promesas_planetas)
    for (var i = 0; i < planetas.length; i++) {
      console.log(`${planetas[i].name}`)
    }
  }catch(id){
    Error_Planeta(id)
  }
}

ObtenerPlanetas()