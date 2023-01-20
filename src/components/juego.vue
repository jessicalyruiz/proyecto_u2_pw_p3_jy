<template>
  <h1>Juego</h1>
  <div v-if="mostrarjuego">
  <div id="contenedor-juego" v-if="banderaJuego">
    <p>Puntaje: {{ puntaje }}</p>
    <p>Intento: {{ intento }}</p>
  </div>
  <div v-if="mostrarinicio">
    <img src="../img/black.png" alt="" />
    <img src="../img/black.png" alt="" />
    <img src="../img/black.png" alt="" />
  </div>
  <div v-if="!mostrarinicio">
    <img :src="this.poke1.ruta" alt="" />
    <img :src="this.poke2.ruta" alt="" />
    <img :src="this.poke2.ruta" alt="" />
  </div>
  <div>
    <p>{{ pokemontext1 }}</p>
    <p>{{ pokemontext2 }}</p>
    <p>{{ pokemontext3 }}</p>
  </div>
  <button v-on:click="jugar()">Jugar</button>
  </div>
  <div v-if="mostrarterminarjuego">
    <h1>5 intentos</h1>
    <h2>Intenta nuevamente</h2>

    <button v-on:click="nuevoJuego()">Nuevo Juego</button>

  </div>

  <div v-if="mostrarganador">
    <p>Puntaje: {{ puntaje }}</p>
    <img src="../img/congratulations.gif" alt=",n">
    <h3>has ganado un premio</h3>
    <button v-on:click="nuevoJuego()">Nuevo Juego</button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      puntaje: 0,
      intento: 0,
      banderaJuego: true,
      pokemontext1: "xxxxxxxxxxx",
      pokemontext2: "xxxxxxxxxxx",
      pokemontext3: "xxxxxxxxxxx",
      poke1: null,
      poke2: null,
      poke3: null,
      mostrarinicio: true,
      mostrarjuego:true,
      mostrarganador:false,
      mostrarterminarjuego:false,
    };
  },
  methods: {
    async jugar() {
      const nimAleat1 = this.obtenerAleatorio(3);
      const nimAleat2 = this.obtenerAleatorio(3);
      const nimAleat3 = this.obtenerAleatorio(3);
      console.log(nimAleat1);
      console.log(nimAleat2);
      console.log(nimAleat3);
      const vectorPlantilla = await this.construirPokemons();
      this.poke1 = vectorPlantilla[nimAleat1];
      this.poke2 = vectorPlantilla[nimAleat2];
      this.poke3 = vectorPlantilla[nimAleat3];

      this.pokemontext1 = this.poke1.nombre;
      this.pokemontext2 = this.poke2.nombre;
      this.pokemontext3 = this.poke3.nombre;
      this.mostrarinicio = false;
      this.intento++

      if(this.poke1.nombre==this.poke2.nombre){
        this.puntaje=this.puntaje+5
      }else if( this.poke1.nombre==this.poke2.nombre||this.poke3.nombre==this.poke2.nombre||this.poke1.nombre==this.poke3.nombre){
        this.puntaje=this.puntaje+2
      }
      if(this.intento==5&& this.puntaje<10){
        this.mostrarjuego=false
        this.mostrarterminarjuego=true
      }
      if(this.intento==5&& this.puntaje>=10){
        this.mostrarjuego=false
        this.mostrarganador=true
      }
    },
    obtenerAleatorio(tope) {
      return Math.floor(Math.random() * tope) + 1;
    },
    async consumirAPI(id) {
      const data = await fetch("https://pokeapi.co/api/v2/pokemon/" + id).then(
        (r) => r.json()
      );
      return data;
    },
    definirPokemons() {
      const vectoridPokemon = [2, 3, 80, 15];
      return vectoridPokemon;
    },
    async construirPokemons() {
      const vectoObjetoPo = [];
      const vector = this.definirPokemons();
      console.log("hola");
      console.log(vector);
      for (let i = 0; i < 4; i++) {
        const idPokemon = vector[i];
        const objp = await this.construirOnjetoPokemon(idPokemon);
        vectoObjetoPo.unshift(objp);
        
      }

     return vectoObjetoPo
    },
   async construirOnjetoPokemon(id) {
      console.log(id);
      const { name } =await this.consumirAPI(id);
      const objetoPoke = {
        ruta:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" +
          id +
          ".svg",
        nombre: name,
      };
      return objetoPoke;
    },
    nuevoJuego(){
      this.mostrarinicio=true
      this.intento=0
      this.puntaje=0
      this.pokemontext1= "xxxxxxxxxxx",
      this.pokemontext2= "xxxxxxxxxxx",
      this.pokemontext3= "xxxxxxxxxxx",
      this.mostrarjuego=true
      this.mostrarterminarjuego=false
      this.mostrarganador=false
    }
  },
};
</script>

<style>
img {
  margin: 15px 60px;
  height: 180px;
  width: 180px;
}
p {
  display: inline;
  margin-inline: 130px;
}
</style>