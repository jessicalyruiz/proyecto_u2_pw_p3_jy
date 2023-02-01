<template>
    <div class="option-container">
  <ul>
      <li v-for="poke in pokemons" :key="poke.id" v-on:click="$emit('PokemonSelecionado', {idPoke:poke.id, intents:newPoke(), nombre:poke.nombre})">{{ poke.nombre }}</li>
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
      },
      nuevoPoke:false
    },
    data(){
        return{
            intentos:0,
        }
    },
    methods:{
      imprimir(){
        console.log("gracias")
      },
      newPoke(){
        console.log('nuevoPoke Ops: '+this.nuevoPoke)
        if(this.nuevoPoke){
            this.intentos=1
            console.log('nuevoPoke Ops: Intentos'+this.intentos)
            return this.intentos
        }else{
            this.intentos+=1
            console.log('nuevoPoke Ops: Intentos'+this.intentos)
            return this.intentos
        }
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
      background-color: rgb(255, 205, 205);
      border: 1px solid rgba(0, 0, 0, 0.2);
      width: 250px;
      border-radius: 5px;
      margin-top: 10px;
      cursor: pointer;
  }   
  li:hover{
    background-color: rgb(252, 180, 180);
  }
  </style>
