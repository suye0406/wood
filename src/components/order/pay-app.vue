<template>
    <div>
        <payheader-com></payheader-com>
        <paygoodslist-com></paygoodslist-com>
        <likeGoods-com></likeGoods-com>
        <empty-com></empty-com>
        <router-view></router-view>
    </div>
</template>

<script>
import paygoodslist from './pay-goodslist'
import likeGoods from './likeGoods'
import payheader from './pay-header'
import empty from './empty'
export default {
    components: {
        'paygoodslist-com': paygoodslist,
        'likeGoods-com': likeGoods,
        'payheader-com': payheader,
        'empty-com': empty
    }
}
</script>

<style lang="scss">
    
</style>