<template>
  <h1>Juego</h1>

  <div id="contenedor-juego" v-if="banderaJuego">
    <p> Puntaje: {{ puntaje }}</p>
    <p> Intento: {{ intento }}</p>
  </div>
  <div>
    <h1>111</h1>
    <img src="../img/black.png" alt="">
    <img src="../img/black.png" alt="">
    <img src="../img/black.png" alt="">
  </div>
  <div>
    <p>{{ pokemontext1 }}</p>
    <p>{{ pokemontext2 }}</p>
    <p>{{ pokemontext3 }}</p>
  </div>
  <button v-on:click="jugar()"> Jugar </button>
</template>

<script>
export default {
    data(){
        return{
            puntaje:0,
            intento:0,
            banderaJuego:true,
            pokemontext1: 'xxxxxxxxxxx',
            pokemontext2: 'xxxxxxxxxxx',
            pokemontext3: 'xxxxxxxxxxx',
        }
    },
    methods:{
        jugar(){

        },
        obtenerAleatorio(tope){
                return Math.floor(Math.random()*tope)+1;
        },
        async consumirAPI(id){

        },
        definirPokemons(){
            const vectoridPokemon=[2,3,80,15];
            return vectoridPokemon;
        },
        construirPokemons(){
            const vector=this.definirPokemons;
            const vectoridPokemon=[];
        },
        definirJuego(){

        },

    }
}
</script>

<style>
img{
    margin: 15px 60px;
}
p{
    display: inline;
    margin-inline:  130px;
}

</style>