<template>
  <div id="home"class="col-lg-12">
    <Header></Header>
    <SowingMap></SowingMap>
    <PopularSowingMap></PopularSowingMap>
    <NewProductRelease></NewProductRelease>
    <AllCatalogues></AllCatalogues>
    <BottomMenu></BottomMenu>
  </div>
</template>

<script>
  import Header from './Header'
  import SowingMap from './SowingMap'
  import PopularSowingMap from './PopularSowingMap'
  import NewProductRelease from './NewProductRelease'
  import AllCatalogues from './AllCatalogues'
  import BottomMenu from '../BottomMenu'

  export default {
    data(){
      return{

      }
    },
    components:{
      Header,SowingMap,PopularSowingMap,NewProductRelease,AllCatalogues,BottomMenu
    }
  }
</script>

<style scoped lang="scss">
  #home{
    overflow: hidden;
  }
</style>
