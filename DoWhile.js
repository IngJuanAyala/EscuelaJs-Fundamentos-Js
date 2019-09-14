var cont = 0

const llueve = () => Math.random() < 0.25

do{
    cont ++
} while (!llueve())

if (cont == 1 ){
    console.log(`fui a ver si llovía ${cont} vez`);
}else {
    console.log(`fui a ver si llovía ${cont} veces`);
}
