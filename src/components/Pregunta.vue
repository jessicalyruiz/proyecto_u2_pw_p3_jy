<template>
    <h1>Pregunta</h1>
    <img v-if="imagsrc" v-bind:src="imagsrc" alt="no se puede visualizar">
  <div class="fondo-dark"></div>
  <div class="container">
    <input v-model="question" type="text" placeholder="Hazme una pregunta">
    <p>Recuerda terminar con un signo de interrogacion (?)</p>
    <div>
        <h2>{{question}}</h2>
        <h1>{{respuesta}}</h1>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            question: 'hola mundo',
            respuesta:null,
            imagsrc: null
        }
    },
    watch:{
        question(value, oldValue){
            console.log(value);
            if(!value.includes("?"))return;
              console.log('vamos consimir API')  
        this.consumirAPI()
        }

    },
    methods:{
       async consumirAPI(){
        this.respuesta='Pensando.'
        this.respuesta='Pensando..'
            //const data=await fetch('https://yesno.wtf/api').then(r=>r.json())
            //desestructurado
            const {answer, forced, image}=await fetch('https://yesno.wtf/api').then(r=>r.json())
           
            console.log(answer)
            console.log(forced)
            console.log(image)
            this.respuesta='Pensando...'
            this.respuesta=answer
            this.imagsrc=image
        }
    }
};
</script>

<style>
    img, .fondo-dark{
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0px; left: 0px;
    }
    .fondo-dark{
        background-color: rgba(0,0,0,0.5);
    }
    input{
        width: 250px;
        height: 25px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
    }
    p{
        color: red;
        font-size: 20px;
        margin-top: 0px;
    }
    h1,h2{
        color: red;
    }
    h2{
        margin-top: 150px;
    }
    .container{
        position: relative;
        z-index: 99;
    }
</style>