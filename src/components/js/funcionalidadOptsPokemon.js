const consumirAPI()=>{

}


function obtenerAleatorio(tope){
    return Math.floor(Math.random()*(tope))+1;
}
const crearAregloPokemon(){
    var arreglo;
    arreglo[0]=obtenerAleatorio(600);
    arreglo[1]=obtenerAleatorio(600);
    arreglo[2]=obtenerAleatorio(600);
    arreglo[3]=obtenerAleatorio(600);
    return arreglo;
}