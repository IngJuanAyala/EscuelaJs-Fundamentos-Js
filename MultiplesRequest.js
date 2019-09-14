const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";
const opts = { crossDomain: true };
const on_response = luke => console.log(`Hola, yo soy ${luke.name}`);

function obtener_personaje(id) {
    consturl = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
    $.get(url, opts, on_response);
}


obtener_personaje(1)
obtener_personaje(2)
obtener_personaje(3)