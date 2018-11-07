<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

  export default {
    name: 'App',
  }
</script>

<style>
  html,body{
    width: 100%;
    height: 100%;
  }
  .col-lg-12,.col-lg-11,.col-lg-10,.col-lg-9,.col-lg-8,.col-lg-7,.col-lg-6,.col-lg-5,.col-lg-4,.col-lg-3,.col-lg-2,.col-lg-1{
    margin: 0;
    padding: 0;
  }
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  /*margin-top: 60px;*/
}
  input{
    outline: none;
  }
  a:hover{
    text-decoration: none;
  }
  li{list-style: none;}
</style>
