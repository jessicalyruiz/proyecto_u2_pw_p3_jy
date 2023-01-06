<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h2>este es el componente principal!!</h2>
  <Contador titulo="Estudiante" v-bind:inicio="10"/>
  <Contador titulo="Profesor"  v-bind:inicio="-2"/>
</template>

<script>
import Contador from './components/Contador.vue'
export default {
  name: 'AppContador',
  components: {
      Contador
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
