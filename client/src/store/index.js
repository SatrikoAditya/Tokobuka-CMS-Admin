import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    }
  },
  actions: {
    fetchProduct ({ commit }) {
      axios.get('http://localhost:3000/product', {
        headers: {
          token: localStorage.token
        }
      })
        .then(({ data }) => {
          console.log(data, '<<<<<<<<<<<<< ini dataaaaaaa')
          commit('setProducts', data.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    login (context, payload) {
      const { email, password } = payload
      axios.post('http://localhost:3000/login', {
        email, password
      })
        .then(({ data }) => {
          localStorage.setItem('token', data.token)
          router.push({ name: 'Home' })
        })
        .catch(console.log)
    },
    addProduct (context, payload) {
      const { name, image_url, price, stock } = payload
      axios.post('http://localhost:3000/product', {
        name, image_url, price, stock
      }, {
        headers: {
          token: localStorage.token
        }
      })
        .then(({ data }) => {
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteProduct (context, id) {
      console.log(id, '<<<<<<<<<<<<<<<<<<<<<<<< ini id')
      axios.delete(`http://localhost:3000/product/${id}`, {
        headers: {
          token: localStorage.token
        }
      })
        .then(data => {
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
