<template>
  <div class="home">
    <div class="nav">
      房间
    </div>
    <div class="page">
      <div class="header">用户名:{{ $store.state.userName }}，在线人数{{ num }}</div>
      <div class="wrap">
        <div class="screen" id="screen">
          <p v-for="(item,index) in info" :key="index">{{ item.user }}：{{ item.content }}</p>
        </div>
        <div class="entry">
          <input v-model="enter" @keyup.enter="sendMessage">
          <button @click="sendMessage">发送</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      id: '',
      num: '',
      enter: '',
      info: []
    }
  },
  created () {
    this.$socket.emit('getLoginInfo')
  },
  methods: {
    sendMessage () {
      this.$socket.emit('send', this.enter)
      this.enter = ''
    }
  },
  sockets: {
    id (data) {
      this.id = data
    },
    num (data) {
      this.num = data
    },
    message (data) {
      this.info.push(data)
      this.$nextTick(() => {
        document.getElementById('screen').scrollTop = document.getElementById('screen').scrollHeight
      })
    }
  }
}
</script>
<style lang="less" scoped>
.home {
  width: 100vw;
  height: 100vh;
  display: flex;
}

.nav {
  background: #281f1d;
  width: 150px;
  height: 100vh;
}

.page {
  width: calc(100vw - 150px);
  height: 100vh;
  .header {
    height: 80px;
    line-height: 80px;
    background: #7bbfea;
  }
  .screen {
    height: calc(100vh - 80px - 100px);
    background: #afdfe4;
    overflow-y: auto;
    p {
      text-align: left;
    }
  }
  .entry {
    height: 100px;
    display: flex;
    input {
      flex: 10;
    }
    button {
      flex: 1;
    }
  }
}
</style>
