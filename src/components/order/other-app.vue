<template>
    <div>
        <otherheader-com></otherheader-com>
        <empty-com></empty-com>
        <!-- <othergoodlist-com></othergoodlist-com> -->
        <likeGoods-com></likeGoods-com>
        <router-view></router-view>
    </div>
</template>

<script>
import othergoodlist from './other-goodslist'
import likeGoods from './likeGoods'
import otherheader from './other-header'
import empty from './empty'
export default {
    components: {
        'othergoodlist-com': othergoodlist,
        'likeGoods-com': likeGoods,
        'otherheader-com': otherheader,
        'empty-com': empty
    }
}
</script>

<style lang="scss">
    
</style>