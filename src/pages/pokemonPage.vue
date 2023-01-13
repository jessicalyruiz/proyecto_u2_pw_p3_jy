<template>
<PokemonImg v-bind:numero="4" :mostrar="true"/>
  <PokemonOpts/>
</template>

<script>
import PokemonImg from'../components/PokemonImg.vue'
import PokemonOpts from'../components/PokemonOpts.vue'

export default {
    components:{
        PokemonImg,
        PokemonOpts
    }
}
</script>

<style>

</style>