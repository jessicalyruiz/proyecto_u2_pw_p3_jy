<template>
  <div class="option-container">
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
</ul>

  </div>
</template>

<script>
export default {

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