<template>
  <div class="option-container">
<ul>
    <li v-for="poke in pokemons" :key="poke.id" v-on:click="$emit('PokemonSelecionado', {idPoke:poke.id, inventado:20, nombre:poke.nombre})">{{ poke.nombre }}</li>
    <!--, {idPoke:poke.id, inventado:20, nombre:poke.nombre}-->
</ul>

  </div>
</template>

<script>
export default {
  props:{
    pokemons:{
      type:Array,
      required:true
    }
  },
  methods:{
    imprimir(){
      console.log("gracias")
    }
  }
}
</script>

<style>
.option-container{
    justify-content: center;
    display: flex;
}
ul{
    list-style-type: none;
}
li{
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.2);
    width: 250px;
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
}   
</style>