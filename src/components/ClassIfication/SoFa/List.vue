<template>
  <div id="List">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark"style="">
          <el-row>
            <el-col :span="12">
              <div class="grid-content bg-purple"style="height: 1.3rem;margin-right: .15rem;margin-left: .1rem;">

              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-light"style="height: 1.3rem;margin-left: .15rem;margin-right: .1rem;">

              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "List",
      data(){
          return{
            SoFaList:[],
          }
      },
      created(){
          this.SoFaList = this.$store.state.ClassIfication.list[0].SoFaList[0];
        console.log(this.$store.state.ClassIfication.list[0].SoFaList[0]);
      },
    }
</script>

<style scoped>

</style>
