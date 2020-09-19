<template>
  <section>
        <nav class="navbar navbar-dark bg-light">
            <img src="../assets/ecommerce-logo.png" width="120px">
            <li class="nav navbar-nav ml-auto">
                <a class="btn btn-danger" role="button" href="#">Logout</a>
            </li>
        </nav>
        <div class="container">
            <div class="row pt-5">
                <div class="col-8">
                  <h4>
                      <b>All Product</b>
                      <ModalAdd @addProduct="addProduct"/>
                  </h4>
                  <ul id="todo-container" class="list-unstyled" style="overflow-y: auto; height: 500px;">
                    <ProductList :products="products" @deleteProduct="deleteProduct" />
                  </ul>
                </div>
              </div>
        </div>
    </section>
</template>

<script>
// @ is an alias to /src
import ProductList from '../components/ProductList'
import ModalAdd from '../components/ModalAdd'

export default {
  name: 'Home',
  components: {
    ProductList,
    ModalAdd
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    fetchProduct () {
      this.$store.dispatch('fetchProduct')
    },
    addProduct (payload) {
      this.$store.dispatch('addProduct', payload)
    },
    deleteProduct (id) {
      console.log(id, '<<<<<<<<<<<<<<<, ini id di home')
      this.$store.dispatch('deleteProduct', id)
    }
  },
  created () {
    this.fetchProduct()
  }
}
</script>
