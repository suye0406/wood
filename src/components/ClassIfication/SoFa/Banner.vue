<template>
  <div id="banner">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark"style="height: 2.02rem;background-color: #5bc0de;">
          <img :src="banner.img" alt=""width="100%"height="100%">
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "Banner",
      data(){
          return{
            banner:[],
          }
      },
      created(){
          this.banner = this.$store.state.ClassIfication.list[0].banner[0];
          console.log(this.$store.state.ClassIfication.list[0].banner[0])
        console.log(this.banner.img)
      }
    }
</script>

<style scoped>

</style>
