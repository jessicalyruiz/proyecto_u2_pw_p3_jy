<template>
  <h1 v-if="!pokemonCorrecto">Espere por favor</h1>
  <div v-if="pokemonCorrecto">
    <h1>Quien es este pokemon?</h1>
<PokemonImg :pokemonId="pokemonCorrecto.id" v-bind:numero="4" :mostrar="true"/>
      <!-- $event representa al objeto enviado en la segunda posiicion del eventp hijo validarRespuesta-->
  <PokemonOpts :pokemons="pokemonArray" @PokemonSelecionado="validarRespuesta($event)"/>
  <div  class="mensaje"> </div>
  <p>{{ mensaje }}</p>
  <button v-on:click="reiniciar()">Reiniciar Juego</button>
</div>
</template>

<script>
import PokemonImg from'../components/PokemonImg.vue'
import PokemonOpts from'../components/PokemonOpts.vue'
import obtenerPokemonsFachada from '../js/obtenerPokemons'
export default {
 
  data(){
    return{
        pokemonArray:[],
        pokemonCorrecto:null,
        mostrarPokemon:false,
        mensaje:null,

    }
  },
    components:{
        PokemonImg,
        PokemonOpts
    },
    mounted(){
      this.cargaPokemonInicial()
    },
    methods:{
      async cargaPokemonInicial(){
        console.log('mounted')
      const vec= await  obtenerPokemonsFachada();
      console.log('imprimo vector')
      console.log(vec)
      this.pokemonArray=vec

      const numero=Math.floor(Math.random()*4)
      console.log(numero)
      this.pokemonCorrecto=this.pokemonArray[numero]
      },
      validarRespuesta(pokemonSeleccionadoHijo){
        console.log("prueba evento")
        console.log(pokemonSeleccionadoHijo)
        this.mostrarPokemon=true
        const idSeleccionado=pokemonSeleccionadoHijo.id

        if(idSeleccionado==this.pokemonCorrecto.id){
          console.log("correcto")
          this.mensaje="Correcto"
        }else{
          console.log("incorrecto")
          this.mensaje="MAL, intenta otra vez"
        }
      },
      reiniciar(){
        console.log(reiniciando)
      }
    }
}
</script>

<style>

</style>