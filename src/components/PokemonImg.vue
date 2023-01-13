<template>
<h1>Quién es este pokemon?</h1>
<div class="pokemon-container">


<img  v-bind:src="obtenerImg" alt="no se puede renderizar" class="ocultar-pokemon">
<img v-if="showPokemon" v-bind:src="obtenerImg" alt="no se puede renderizar">
</div>
  </template>

<script>
export default {
  props:{
    numero:Number,
    mostrar:Boolean
  },
    data() {
    return {
      
      mostrarPokemon:true,
      src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'
    };
  },
  computed:{
      obtenerImg(){
        var srccompleto=this.src+this.numero+ '.svg'
        console.log(srccompleto)
        return srccompleto
      },
      showPokemon(){
        return this.mostrar
      }
  },
}
</script>

<style>
.ocultar-pokemon{
    filter: brightness(0);
   
}
img{
    position: absolute;
    height: 200px;
    right: 41%;
    -webkit-user-drag: none;
}
.pokemon-container{
    height: 200px;
}
</style>