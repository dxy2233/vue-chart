<template>
  <div class="login">
    <div class="wrap">
      <p>昵称</p>
      <input v-model="userName" @keyup.enter="linkStart">
      <button @click="linkStart">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      userName: ''
    }
  },
  methods: {
    linkStart () {
      this.$socket.emit('login', this.userName)
    }
  },
  sockets: {
    login (data) {
      if (data.code === 0) {
        this.$store.dispatch('login', this.userName)
        this.$router.push({ path: this.redirect || '/' })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background: #feeeed;
}

.wrap {
  width: 200px;
  margin: 0 auto;
  padding-top: 20%;
  display: flex;
  flex-flow: column;
  * {
    margin-bottom: 20px;
  }
  input {
    height: 30px;
    text-align: center;
  }
  button {
    height: 30px;
  }
}
</style>
