<template>
  <div id="List">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark"style=""v-for="item in 10">
          <el-row>
            <el-col :span="12">
              <div class="grid-content bg-purple"style="height: 1.3rem;">

              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-light"style="height: 1.3rem;">

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
        name: "List"
    }
</script>

<style scoped>

</style>
