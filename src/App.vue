<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h2>este es el componente principal!!</h2>
  <Contador titulo="Estudiante"/>
  <Contador titulo="Profe"/>
</template>

<script>
import Contador from './components/Contador.vue'
export default {
  name: 'App',
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
