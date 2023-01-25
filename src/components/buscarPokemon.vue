<template>
    <div class="container">
    <img v-if="mostrarImagen" v-bind:src="ruta" alt="No se puede mostrar">
    <div class="center">
    <h1>Buscar pokemon</h1>
  <input v-model="nombre" type="text" placeholder="Ingresa nombre del Pokemon">
  <button  v-on:click="buscar()">Buscar</button>
  <p v-if="mostrarPensando">{{ mensaje }}</p>
  <div v-if="mostrarDatosPoke" class="mostrar">
        <p>Nombre del Pokemon: {{ nombre }}</p>
        <p>Id: {{ id }}</p>
  
    </div>
    <p v-if="mostrarNoEncontro"> No se encontró el pokemon</p>
  </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            nombre:null,
            id:null,
            ruta:null,
            mensaje:null,
            mostrarPensando:false,
            mostrarImagen:false,
            mostrarDatosPoke:false,
            mostrarNoEncontro:false,
        };
    },
    methods:{
        async buscar(){
           // this.nombre=nombre;
            console.log("buscar");
            console.log(this.nombre);
            for(let i=1;i<=600;i++){
                const {name}= await this.consumirAPI(i);
                if (this.nombre==name){
                    this.id=i;
                    this.nombre=name;
                    this.ruta="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+i+".svg";
                    this.mostrarPensando=false;
                    console.log("lo encontro");
                    this.mostrarImagen=true;
                    this.mostrarDatosPoke=true;
                    break;
                }else{
                    this.mostrarPensando=true
                    this.mensaje="buscando..."
                    console.log("no encuentra")
                    if(i==600){
                        this.mostrarPensando=false;
                        this.mostrarNoEncontro=true;
                    }
                }
            }
        },
        async consumirAPI(id){
            const pokemonData=await fetch("https://pokeapi.co/api/v2/pokemon/"+id).then((r)=>r.json());
            return pokemonData;
        }
    }
}
</script>


<style>
header{
    background-color: rgb(241, 172, 172);
}
body{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: rgb(226, 165, 165);
  min-height: 100vh;
}
img{
    height: 100vh;
        width: 100vw;
        /*position: absolute;*/
        position: relative;
        top: 0px; left: 0px;
        opacity: 1;
}
input{
        width: 250px;
        height: 25px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
    }
    p{
        font-size: 20px;
        margin-top: 0px;
    }
    h1{
        color: rgb(92, 90, 90);
        padding: 20px;
        margin-top: 20px;
    }
.mostrar{
    margin-top: 20px;
}
.container {
  position: relative;
 background-color: blue;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  background-color: rgb(241, 187, 194);
  padding: 50px;
}
button{
    border-radius: 12px;
    margin-left: 10px;
    padding: 15px;
    border: 2px solid #4CAF50;
}

</style>