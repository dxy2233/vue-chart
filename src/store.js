import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: ''
  },
  mutations: {
    set_userName (state, userName) {
      state.userName = userName
    }
  },
  actions: {
    async login ({ commit }, userName) {
      commit('set_userName', userName)
    }
  }
})
