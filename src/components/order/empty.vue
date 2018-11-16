<template>
    <div>
        <div class="empty">
            <img src="../../../static/img/二倍率icon切图/listnone@2x.png" alt="">
            <p>你还没有相关订单</p>
        </div>
    </div>
</template>

<script>

export default{
 
}
</script>

<style lang="scss">
    .empty{
        width: 100%;
        height: 3.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        img{
            height: 1.14rem;
            display: block;
            margin: 0 auto;
        };
        p{
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #DCDCDC;
            letter-spacing: -0.29px;
            text-align: right;
            margin: 5px auto;
        }
    }
</style>