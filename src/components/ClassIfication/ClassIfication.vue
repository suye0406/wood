<template>
  <div id="ClassIfication"style="height: 100%;width: 100%;">
    <el-row style="height: 100%;">
      <el-col :span="24" style="height: 100%;">
        <div class="grid-content bg-purple-dark"style="height: 100%;">
          <el-row style="height: 100%;">
            <el-col :span="24" style="height: 100%;">
              <div class="grid-content bg-purple-dark"style="height: 100%;">
                <Header></Header>
                <!-- Swiper -->
                <div class="swiper-container">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <SoFa></SoFa>
                    </div>
                    <div class="swiper-slide">
                      <Stool></Stool>
                    </div>
                    <div class="swiper-slide">
                      <Table></Table>
                    </div>
                   </div>
                </div>
              </div>
            </el-col>
          </el-row>
          <BottomMenu style="z-index: 3;"></BottomMenu>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import '../../../node_modules/swiper/dist/css/swiper.min.css';
  import Header from "./Header";
  import SoFa from "./SoFa/SoFa";
  import Stool from "./Stool/Stool";
  import Table from "./Table/Table";
  import BottomMenu from '../BottomMenu'
    export default {
        name: "ClassIfication",
      components: {Header,SoFa,BottomMenu,Stool,Table},
      data(){
          return{

          }
      },
      created(){
      },
      mounted(){
        var swiper = new Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination',
          },
        });
      }
    }
</script>

<style scoped>

</style>
