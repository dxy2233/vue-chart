<template>
  <div class="home">
    <div class="nav">
      <p v-for="(item,index) in numList" :key="index">{{ item }}</p>
    </div>
    <div class="page">
      <div class="header">用户名:{{ $store.state.userName }}，在线人数{{ num }}</div>
      <div class="wrap">
        <div class="screen" id="screen">
          <p v-for="(item,index) in info" :key="index">{{ item.user }}：{{ item.content }}</p>
        </div>
        <div class="entry">
          <textarea v-model="enter" @keydown.stop.prevent.enter="sendMessage"/>
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
      num: '',
      numList: [],
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
    numList (data) {
      this.numList = data.content
      this.num = this.numList.length
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
  width: 150px;
  height: 100vh;
  background: #2C3E50;
  color: #fff;
  text-align: center;
  padding: 20px 10px;
  overflow-x: hidden;
  overflow-y: scroll;
  p {
    padding-bottom: 5px;
  }
  &::-webkit-scrollbar{
    display: none;
  }
}

.page {
  width: calc(100vw - 150px);
  height: 100vh;
  .header {
    height: 60px;
    line-height: 60px;
    background: #99CCFF;
    text-align: center;
  }
  .screen {
    height: calc(100vh - 60px - 80px);
    background: #EFF7FF;
    overflow-y: auto;
    padding: 20px;
    p {
      text-align: left;
    }
  }
  .entry {
    height: 80px;
    display: flex;
    textarea {
      flex: 10;
      line-height: 1.5;
      padding: 20px;
      resize: none;
      overflow: hidden;
      font-size: 16px;
    }
    button {
      flex: 2;
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
}

@media screen and (max-width: 600px) {
  .nav {
    display: none;
  }
  .page {
    width: 100vw;
  }
}
</style>
