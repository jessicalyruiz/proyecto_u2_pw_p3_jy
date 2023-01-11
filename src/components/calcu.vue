<template>
  <div class="titulo"> 
        <header>
            <h1>Calculadora</h1>
            

        </header>
    </div>
    <div class="teclas">
        <section >
            <div class="pantalla">
            <label id="num1" for="">{{numero1}}</label>
            <label id="oper" for="">{{operacion}}</label>
            <label id="num2" for="">{{numero2}}</label>
            <label id="ig" for="">=</label>
            <label id="resul" for="">{{resultado}}</label>
        </div>
            <br>
            <button class="button" id="but7" v-on:click="
                llenar(7)"
            >7</button>

            <button class="button" id="but8" v-on:click="
                llenar(8)"
            >8</button>

            <button class="button" id="but9" v-on:click="
                llenar(9)"
            >9</button>

            <button class="button" id="butdiv" v-on:click="
               ope('/') "
            >/</button>
            <br>

            <button class="button" id="but4" v-on:click="
                llenar(4)"
            >4</button>

            <button class="button" id="but5" v-on:click="
                llenar(5)"
            >5</button>

            <button class="button" id="but6" v-on:click="
                llenar(6)"
            >6</button>

            <button class="button" id="butmul" v-on:click="
               ope('*')"
            >*</button>
            <br>
          
            <button class="button" id="but1" v-on:click="
                llenar(1)"
            >1</button>

            <button class="button" id="but2" v-on:click="
                llenar(2)"
            >2</button>

            <button class="button" id="but3" v-on:click="
                llenar(3)"
            >3</button>

            <button class="button" id="butres" v-on:click="
                ope('-')"
            >-</button>
            <br>
            <button class="button">.  </button>
            <button class="button" id="but0" v-on:click="
                llenar(0)"
            >0</button>
            <button class="button">. </button>
            <button class="button" id="butsuma" v-on:click="
                ope('+')"
            >+</button>
        </section>
        <section>
            <button class="result" v-on:click="
                calcular" 
                > Resultado</button>
        </section>

    </div>










</template>

<script>
export default {

    data() {
    return {
      numero1: null,
      numero2: null,
      operacion: null,
      resultado: null
    };
  },
  methods: {
    llenar(num){
        if(this.numero1==null){
                    this.numero1= num;
                    }else if(this.numero2==null){
                        this.numero2= num;
                        }
    },
    ope(signo){
        
                if(this.operacion==null){
                    this.operacion= signo;
                    }

    },
  },
  computed: {
    calcular() {
      console.log("se calcula");
      if(this.operacion==='+'){
        console.log("se calcula suma");
        this.resultado= this.numero1 + this.numero2;
        }else if(this.operacion==='-'){
            console.log("se calcula resta");
            this.resultado= this.numero1 - this.numero2;         
        }else if(this.operacion==='*'){
            console.log("se calcula producto");
            this.resultado= this.numero1 * this.numero2;
        }else if(this.operacion==='/'){
            console.log("se calcula division");
            this.resultado=this.numero1 / this.numero2;
        }
    } 
  },
}
</script>

<style>

</style>