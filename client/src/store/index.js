import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
import VueSweetalert2 from 'vue-sweetalert2'

Vue.use(Vuex)
Vue.use(VueSweetalert2)

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
          commit('setProducts', data.data)
          console.log(data.data)
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
          this._vm.$swal.fire({
            icon: 'success',
            title: 'Login Success!',
            showConfirmButton: false,
            timer: 1500
          })
          router.push({ name: 'Home' })
        })
        .catch(err => {
          this._vm.$swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.errors[0],
            showConfirmButton: false,
            timer: 1500
          })
        })
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
          this._vm.$swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Add New Product Success!',
            showConfirmButton: false,
            timer: 2000
          })
          context.dispatch('fetchProduct')
        })
        .catch(err => {
          this._vm.$swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.errors[0],
            showConfirmButton: false,
            timer: 1500
          })
          console.log(err)
        })
    },
    deleteProduct (context, id) {
      this._vm.$swal({
        title: 'Are you sure want to delete this product?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
          if(result.isConfirmed) {
            axios.delete(`http://localhost:3000/product/${id}`, {
              headers: {
                token: localStorage.token
              }
            })
            .then(({data}) => {
                this._vm.$swal.fire({
                  toast: true,
                  position: 'top-end',
                  icon: 'success',
                  title: 'Delete Product Success!',
                  showConfirmButton: false,
                  timer: 2000
                })
                context.dispatch('fetchProduct')
            })
            .catch(err => {
                this._vm.$swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: err.response.data.errors[0],
                  showConfirmButton: false,
                  timer: 1500
                })  
            })
          }
        })
    },
    updateProduct (context, payload) {
      const { id, name, image_url, price, stock } = payload
      axios.put(`http://localhost:3000/product/${id}`, {
        name, image_url, price, stock
      }, {
        headers: {
          token: localStorage.token
        }
      })
      .then(data => {
        this._vm.$swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: 'Success Edit Product!',
          showConfirmButton: false,
          timer: 2000
        })
        context.dispatch('fetchProduct')
      })
      .catch(err => {
        this._vm.$swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data.errors[0],
          showConfirmButton: false,
          timer: 1500
        })
      })
    },
    logout () {
      localStorage.clear()
      this._vm.$swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'info',
        title: 'Good bye, see you later!',
        showConfirmButton: false,
        timer: 2000
      })
      router.push({ name: 'Login' })
    }
  },
  modules: {
  }
})
