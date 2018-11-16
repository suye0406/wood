<template>
    <div>
        <header-com></header-com>
        <!-- <goodlist-com></goodlist-com> -->
        <empty-com></empty-com>
        <likeGoods-com></likeGoods-com>
        <router-view></router-view>
    </div>
</template>

<script>
import goodlist from './finished-goodslist'
import likeGoods from './likeGoods'
import header from './finished-header'
import empty from './empty'
export default {
    components: {
        'goodlist-com': goodlist,
        'likeGoods-com': likeGoods,
        'header-com': header,
        'empty-com': empty
    }
}
</script>

<style lang="scss">
    
</style>