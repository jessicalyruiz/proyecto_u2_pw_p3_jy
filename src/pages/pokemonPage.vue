<template>
  <h1 v-if="!pokemonCorrecto">Espere por favor</h1>
  <div v-if="pokemonCorrecto">
<PokemonImg :pokemonId="pokemonCorrecto.id" v-bind:numero="4" :mostrar="true"/>
      
  <PokemonOpts :pokemons="pokemonArray"/>
</div>
</template>

<script>
import PokemonImg from'../components/PokemonImg.vue'
import PokemonOpts from'../components/PokemonOpts.vue'
import obtenerPokemonsFachada from '../js/obtenerPokemons'
export default {
  props:{
    pokemons:{
      type:Array,
      required:true
    }
  },
  data(){
    return{
        pokemonArray:[],
        pokemonCorrecto:null,
        mostrarPokemon:false
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
      const vec= await  obtenerPokemonsFachada
      console.log('imprimo vector')
      console.log(vec)
      this.pokemonArray=vec

      const numero=Math.floor(Math.random()*4)
      console.log(numero)
      this.pokemonCorrecto=this.pokemonArray[numero]
      }
    }
}
</script>

<style>

</style>