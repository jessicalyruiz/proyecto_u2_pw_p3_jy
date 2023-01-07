<template>
  <h2>Contador</h2>
  <h2>{{ valorTitulo }}</h2>
  <p>{{ numero }} <sup>2</sup>={{ obtenerCuadradoComputado }}</p>
  <!-- <p>{{numero}} <sup>2</sup>={{obtenerCuadrado()}}</p>
  <p>{{numero}} <sup>2</sup>={{obtenerCuadradoComputado}}</p>
<p>{{numero}} <sup>2</sup>={{obtenerCuadradoComputado}}</p>
<p>{{numero}} <sup>2</sup>={{obtenerCuadradoComputado}}</p>
-->
  <div>
    <button v-on:click="incrementar">+1</button>
    <button v-on:click="decrementar">-1</button>
  </div>
</template>

<script>
export default {
  //options API

  // props:['titulo', 'inicio'],  //forma basica
  /* props:{  //esta es la forma correcta de declarar  
titulo: String,
inicio: Number
 },*/
  //forma avanzada... tb permite realizar validaciones
  props: {
    titulo: String,
    inicio:{
      type: Number,
      required: false,
      default:67, //cuando no le pase un valor, le pone uno por defecto
      validator(value){
        return value>0
      }
    }
    
  },
  name: "patito",
  data() {
    return {
      numero: this.inicio,
    };
  },
  methods: {
    obtenerCuadrado() {
      console.log("se calcula cuadrado");
      return this.numero * this.numero;
    },
    incrementar() {
      //this.numero++
      this.numero = this.numero + 1;
    },
    decrementar() {
      //this.numero--
      this.numero = this.numero - 1;
    },
  },
  computed: {
    obtenerCuadradoComputado() {
      console.log("se calcula cuadrado computado");
      return this.numero * this.numero;
    },
    valorTitulo() {
      return this.titulo || "valor por defecto..";
    },
  },
};
</script>

<style>
button {
  background-color: #64b687;
  border-radius: 5px;
  border: 1px solid white;
  margin: 0px 5px;
  cursor: pointer;
  padding: 5px 20px;
}

button:hover {
  background-color: #5aa67b;
}
</style>