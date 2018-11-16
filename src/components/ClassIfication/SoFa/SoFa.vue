<template>
  <div id="SoFa">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <Banner></Banner>
          <List></List>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    import Banner from './Banner'
    import List from './List'
    export default {
        name: "SoFa",
      components: {Banner,List},
      data(){
          return{

          }
      },
    }
</script>

<style scoped>

</style>
