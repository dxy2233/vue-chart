<template>
  <div class="login">
    <div class="wrap">
      <p>请输入昵称</p>
      <input v-model.trim="userName" @keyup.enter="linkStart">
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
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrap {
  width: 200px;
  padding-bottom: 100px;
  display: flex;
  flex-flow: column;
  * {
    margin-bottom: 20px;
    border-radius: 10px;
    outline: none;
    text-align: center;
  }
  input {
    height: 30px;
    border: 1px solid #ccc;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    &:focus {
      border-color: #66afe9;
      box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
    }
  }
  button {
    height: 30px;
    color: #fff;
    background: #409EFF;
    border: none;
    &:hover {
      background: #66b1ff;
      cursor: pointer;
    }
    &:active {
      background: #3a8ee6;
    }
  }
}
</style>
