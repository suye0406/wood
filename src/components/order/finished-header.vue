<template>
    <div>
      <div class="finished">
          <header>
            <router-link to="../My">
                <div class="header_left"><img src="../../../static/img/二倍率icon切图/Back@2x.png" alt=""></div>
            </router-link>
            <div class="header_right">已完成订单</div>
          </header>
      </div>
    </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss">
.finished {
  margin-top: 0.2rem;
  header {
    width: 100%;
    height: 0.44rem;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    background: #ffffff;
    .header_left {
      height: 100%;
      width: 1.28rem;
      display: flex;
      align-items: center;
      padding-left: 0.1rem;
      img {
        display: block;
        width: 0.1rem;
        height: 0.18rem;
      }
    }
    .header_right {
      width: 0.99rem;
      height: 0.25rem;
      font-family: PingFangSC-Medium;
      font-size: 0.18rem;
      color: #030303;
      letter-spacing: -0.43px;
      text-align: center;
      font-weight: bold;
    }
  }
}
</style>