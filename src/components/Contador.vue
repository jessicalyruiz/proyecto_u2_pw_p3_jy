<template>
  <h2>Contador</h2>
  <h2>info estudiante</h2>
  <p>{{numero}} <sup>2</sup>={{obtenerCuadradoComputado}}</p>
 <!-- <p>{{numero}} <sup>2</sup>={{obtenerCuadrado()}}</p>
  <p>{{numero}} <sup>2</sup>={{obtenerCuadradoComputado}}</p>
<p>{{numero}} <sup>2</sup>={{obtenerCuadradoComputado}}</p>
<p>{{numero}} <sup>2</sup>={{obtenerCuadradoComputado}}</p>
-->
<div>

  <button v-on:click="incrementar">+1</button>
  <button  v-on:click="decrementar" >-1</button>
</div>
</template>

<script>
export default {
  props:['titulo'],
    name:'patito',
    data(){
      return {
        numero:7
        }
      },
    methods:{
      obtenerCuadrado(){

        console.log('se calcula cuadrado')
        return this.numero*this.numero
        
      },
      incrementar(){
        this.numero++
      },
      decrementar(){
          this.numero--
      }
    },
    computed:{
      obtenerCuadradoComputado(){
         console.log('se calcula cuadrado computado')
        return this.numero*this.numero

      }
    }
}
</script>

<style>

button{
  background-color: #64b687;
  border-radius: 5px ;
  border: 1px solid white;
  margin: 0px 5px;
  cursor: pointer;
  padding: 5px 20px;
}

button:hover{
  background-color: #5aa67b;
}

</style>