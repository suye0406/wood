<template>
  <div id="home"class="col-lg-12">
    <Header></Header>
    <SowingMap></SowingMap>
    <PopularSowingMap></PopularSowingMap>
    <NewProductRelease></NewProductRelease>
    <AllCatalogues></AllCatalogues>
    <!--<BottomMenu></BottomMenu>-->
    <FooterMenu></FooterMenu>
  </div>
</template>

<script>
  import Header from './Header'
  import SowingMap from './SowingMap'
  import PopularSowingMap from './PopularSowingMap'
  import NewProductRelease from './NewProductRelease'
  import AllCatalogues from './AllCatalogues'
//import BottomMenu from '../BottomMenu'
import FooterMenu from '../FooterMenu'
  export default {
    data(){
      return{

      }
    },
    components:{
      Header,SowingMap,PopularSowingMap,NewProductRelease,AllCatalogues,/*BottomMenu,*/FooterMenu
    }
  }
</script>

<style scoped lang="scss">
  #home{
    overflow: hidden;
  }
</style>
