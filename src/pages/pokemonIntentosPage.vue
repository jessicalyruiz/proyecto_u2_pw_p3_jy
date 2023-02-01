<template>
    <div v-if="!resultados" class="Juego">
    <h1 v-if="!pokemonCorrecto">Espere por favor</h1>
    <div v-if="pokemonCorrecto">
      <h1>Quien es este pokemon?</h1>
      <p>Score: {{ score }}</p>
  <PokemonImg :pokemonId="pokemonCorrecto.id" v-bind:idPokemon="pokemonCorrecto.id" :showPokemon="mostrarPokemon"/>
        <!-- $event representa al objeto enviado en la segunda posiicion del eventp hijo validarRespuesta-->
    <PokemonOpts :pokemons="pokemonArray" @PokemonSelecionado="validarRespuesta($event)" :nuevoPoke="reiniciarIntentos"/>
    <div  class="mensaje"> </div>
    <p>{{ mensaje }}</p>
    <button v-if="mostrarnuevoPokemon" v-on:click="nuevoPokemon()">Nuevo Pokemon</button>
   
  </div>
  </div>
  <div v-if="resultados" class="resultados">
      <div v-if="ganaste">
        <h1>Felicitaciones, Ganaste</h1>
        <p>puntaje total: {{ score }}</p>
        <button  v-on:click="reiniciar()">Reiniciar Juego</button>
      </div>
      <div v-if="!ganaste">
        <h1>Perdiste</h1>
        <p>puntaje total: {{ score }}</p>
        <button  v-on:click="reiniciar()">Reiniciar Juego</button>
  
      </div>
  </div>
  </template>
  
  <script>
  import PokemonImg from'../components/JuegoPokeIntentosImg.vue'
  import PokemonOpts from'../components/JuegoPokeIntentosOps.vue'
  import obtenerPokemonsFachada from '../js/obtenerPokemons'
  export default {
   
    data(){
      return{
          pokemonArray:[],
          pokemonCorrecto:null,
          mostrarPokemon:false,
          mensaje:null,
          mostrarMensaje: false,
          mostrarBoton: false,
          intentos:null,
          score:0,
          pokemonsMostrados:1,
          mostrarnuevoPokemon:false,
          reiniciarIntentos:false,
          resultados:false,
          ganaste:false,
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
        console.log('imprimo vector, pagina principal')
        console.log(vec)
        this.pokemonArray=vec
  
        const numero=Math.floor(Math.random()*4)
        console.log(numero)
        this.pokemonCorrecto=this.pokemonArray[numero]
        },
        validarRespuesta(pokemonSeleccionadoHijo){
          this.reiniciarIntentos=false;
          console.log('pokemons mostrados: '+ this.pokemonsMostrados)
          console.log("prueba evento")
          console.log(pokemonSeleccionadoHijo)
          this.mostrarPokemon=true
          const idSeleccionado=pokemonSeleccionadoHijo.idPoke
          this.intentos=pokemonSeleccionadoHijo.intents
          console.log('intentos')
          console.log(this.intentos)
          if(this.intentos==1){
            
          if(idSeleccionado==this.pokemonCorrecto.id){
            console.log("correcto")
            this.mensaje="Correcto [+5], pasar al siguiente pokemon"
            this.score+=5
            console.log('score')
            console.log(this.score)
            this.mostrarnuevoPokemon=true
            if(this.pokemonsMostrados>=3){
              this.resultados=true
              if(this.score>=10){
                this.ganaste=true
              }
            }
          }else{
            console.log("incorrecto")
            this.mensaje="MAL, intenta otra vez"
          }
        }else if(this.intentos==2){
          if(idSeleccionado==this.pokemonCorrecto.id){
            console.log("correcto")
            this.mensaje="Correcto [+2], pasar al siguiente pokemon"
            this.score+=2
            console.log('score')
            console.log(this.score)
            this.mostrarnuevoPokemon=true
            if(this.pokemonsMostrados>=3){
              this.resultados=true
              if(this.score>=10){
                this.ganaste=true
              }
            }
          }else{
            console.log("incorrecto")
            this.mensaje="MAL, Pasar a otro pokemon"
            this.mostrarnuevoPokemon=true
            if(this.pokemonsMostrados>=3){
              this.resultados=true
              if(this.score>=10){
                this.ganaste=true
              }
            }
          }
          
        }
  
        },
        nuevoPokemon(){
          this.cargaPokemonInicial()
          this.pokemonsMostrados+=1
          console.log('pokemosn mostrados')
          console.log(this.pokemonsMostrados)
          this.mostrarMensaje = false;
          this.mostrarBoton = false;
          this.mensaje = "";
          this.mostrarnuevoPokemon=false
          this.mostrarPokemon = false;
          //this.intentos=0;
          console.log('intentos cuando aplasto en nuevo: '+this.intentos)
          
      
            this.reiniciarIntentos=true;
        
  
        },
        reiniciar(){
          console.log('reiniciando')
          this.resultados=false;
          this.score=0;
          this.cargaPokemonInicial()
          this.mostrarMensaje = false;
          this.mostrarBoton = false;
          this.mensaje = "";
          this.mostrarnuevoPokemon=false
          this.mostrarPokemon = false;
          this.pokemonsMostrados=1;
          console.log('intentos cuando aplasto en nuevo: '+this.intentos)
          
      
            this.reiniciarIntentos=true;
        }
      }
  }
  </script>
  
  <style>
  
  </style>