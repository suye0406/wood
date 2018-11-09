<template>
  <div class="header col-lg-12">
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <div style="width: 30vh;height: 5vh;margin-top: 2.5vh;margin-left: 10vh;">
            <img src="../../../static/img/二倍率icon切图/logo@2x.png" height="100%" width="100%"/>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <el-row>
            <el-col :span="8">
              <div class="grid-content bg-purple">&nbsp;</div>
            </el-col>
            <el-col :span="16">
              <div class="grid-content bg-purple-light">
                <el-row>
                  <el-col :span="5">
                    <div class="grid-content bg-purple">
                      <i class="el-icon-upload"></i>
                    </div>
                  </el-col>
                  <el-col :span="5">
                    <div class="grid-content bg-purple-light">
                      <i class="el-icon-message"></i>
                    </div>
                  </el-col>
                  <el-col :span="10">
                    <div class="grid-content bg-purple">
                      <el-row>
                        <el-col :span="8">
                          <div class="grid-content bg-purple">
                            <div class="pic"></div>
                          </div>
                        </el-col>
                        <el-col :span="16">
                          <div class="grid-content bg-purple-light">
                            <i style="font-size: 3vh">{{name}}</i>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                  </el-col>
                </el-row>
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
