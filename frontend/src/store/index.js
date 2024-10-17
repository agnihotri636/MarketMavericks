import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    user: null,
    trades: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setTrades(state, trades) {
      state.trades = trades
    }
  },
  actions: {
    async login({ commit }, credentials) {
      const response = await axios.post('http://localhost:3000/api/auth/login', credentials)
      localStorage.setItem('token', response.data.token)
      commit('setUser', response.data.user)
    },
    async fetchTrades({ commit }) {
      const response = await axios.get('http://localhost:3000/api/trades', {
        headers: { 'x-auth-token': localStorage.getItem('token') }
      })
      commit('setTrades', response.data)
    }
  },
  modules: {
  }
})