for(var i = 1 ; i <= DAYS ; i++){
    var random = Math.random()// entre 0 y 1
    if(random < 0.25){
        //subir de peso
        aumentardePeso(persona)

    }else if(random <0.50){
        //adelgazar
        adelgazar(persona)
    }else{
        //algo
    }
}