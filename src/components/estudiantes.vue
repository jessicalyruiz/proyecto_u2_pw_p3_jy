<template>
  <h1>Buscar Estudiante</h1>
  <input v-model="id" type="text">
  <button v-on:click="consultar()">Consultar</button>
  <div v-if="mostrarEstu">
    <p>Nombre: {{ nombre }}</p>
    <p>Apellido:{{ apellido }}</p>
    <p>Cedula: {{ cedula }}</p>
    <p>fechaNacimiento: {{ fechaNac }}</p>
    <p>salario: {{ salario }}</p>
  </div>
</template>

<script>
export default {
    data(){
        return{
            id:null,
            mostrarEstu:false,
            nombre:'',
            apellido:'',
            cedula:'',
            salario:0,
            fechaNac:'',
       }
    },
    methods:{
        async consultar(){
            console.log(this.id)
            this.mostrarEstu=true;
            const {apellido,nombre,cedula, fechaNacimiento,salario}=await this.consumirAPI(this.id);
            this.nombre=nombre;
            console.log(nombre)
            console.log(this.nombre)
            this.apellido=apellido;
            this.cedula=cedula;
            this.fechaNac=fechaNacimiento;
            this.salario=salario

        },
        async consumirAPI(id){
            const estudianteData= await fetch("http://localhost:8082/API/Matricula/V1/estudiantes/"+id).then((r)=>r.json());
            return estudianteData
        }
    }
}
</script>

<style>

</style>