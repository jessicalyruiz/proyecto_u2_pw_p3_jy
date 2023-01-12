<template>
<h1>Quién es este pokemon?</h1>
<div class="pokemon-container">


<img v-if="true" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="no se puede renderizar" class="ocultar-pokemon">
<img v-if="true" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="no se puede renderizar">
</div>
  </template>

<script>
export default {
    data() {
    return {
      idPokemon:1,
      mostrarPokemon:true
    };
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