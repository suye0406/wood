<template>
  <div id="Header">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <el-row>
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <p style="text-align: right;color: black;font-size: .12rem;font-weight:bold;margin: .15rem 0 .15rem 0;">沙发</p>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple-light">
                <p style="text-align: center;color: black;font-size: .12rem;font-weight:bold;margin: .15rem 0 .15rem 0;">椅凳</p>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <p style="text-align: left;color: black;font-size: .12rem;font-weight:bold;margin: .15rem 0 .15rem 0;">卓几</p>
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
        name: "Header"
    }
</script>

<style scoped>

</style>
