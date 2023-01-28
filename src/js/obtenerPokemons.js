 const obtenerPokemons= async()=>{
    console.log("calculo de aleatorio")
   const vec=obtenerVectorNumerico()
  return await obtenerVectorNombres(vec)
}



function obtenerAleatorio(min, max){
    return Math.floor(Math.random()*(max-min))+min;
}

const obtenerVectorNumerico=()=>{
    const arreglo=[obtenerAleatorio(1,600),obtenerAleatorio(1,600),obtenerAleatorio(1,600),obtenerAleatorio(1,600)]
    console.log(arreglo)
    return arreglo
}

 const obtenerVectorNombres=async([p1,p2,p3,p4]=[])=>{
    console.log('transformando a nombres')
    console.log(p1)
    console.log(p2)
    console.log(p3)

    const nombrep1= await obtenerNombreAPI(p1)
    const nombrep2= await obtenerNombreAPI(p2)
    const nombrep3= await obtenerNombreAPI(p3)
    const nombrep4= await obtenerNombreAPI(p4)
    console.log(p4)
    const pokemon={
        nombre: nombrep1,
        id: p1
    }
    const vectPokemons=[{
        nombre: nombrep1,
        id: p1
    },
    {
        nombre: nombrep2,
        id: p2
    },
    {
        nombre: nombrep3,
        id: p3
    },{
        nombre: nombrep4,
        id: p4
    }]
    return vectPokemons
}

const obtenerNombreAPI=async(id)=>{
  const data=  await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((r)=>r.json())
  console.log(data.name)
  return data.name
}

/*debo tener un metodo de fachada para exportarlo*/
const obtenerPokemonsFachada=async ()=>{
    return await obtenerPokemons()
}
export default obtenerPokemonsFachada