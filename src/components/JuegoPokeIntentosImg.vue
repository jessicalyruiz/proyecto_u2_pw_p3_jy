<template>

    <div class="pokemon-container">
    
    
    <img  v-if="!showPokemon" v-bind:src="obtenerImg" alt="no se puede renderizar" class="ocultar-pokemon">
    <img   v-bind:src="obtenerImg" alt="no se puede renderizar">
    </div>
      </template>
    
    <script>
    export default {
      props: {
        idPokemon: {
          type: Number,
          required: true,
        },
        showPokemon: true,
      },
    
        data() {
        return {
          src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/',
        };
      },
      computed:{
          obtenerImg(){
            var srccompleto=this.src+this.idPokemon+ '.svg'
            console.log(srccompleto)
            return srccompleto
          },
      },
    }
    </script>
    
    <style>
    .ocultar-pokemon{
        filter: brightness(0);
        position: absolute;
    }
    img{
        
        height: 200px;
    
        -webkit-user-drag: none;
    }
    .pokemon-container{
      margin-left: 100px;
        height: 200px;
    }
    </style>
