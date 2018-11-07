<template>
    <div>
      <div class=""style="width: 67.8%;margin: 0 auto;">
        <div>
          <p class="title">账号密码登陆</p>
          <div>
            <input type="text"placeholder="请输入手机号"class="username"v-model="username"@keyup="user">
          </div>
          <div style="margin-bottom: 1.4rem;">&nbsp;</div>
          <div>
            <input type="text"placeholder="请输入密码"class="code"v-model="password"style="width: 100%;">
          </div>
          <input type="button" value="登陆" class="submit"@click="land"/>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "landpws"
    }
</script>

<style scoped>

</style>
