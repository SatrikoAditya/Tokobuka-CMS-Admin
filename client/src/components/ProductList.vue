<template>
    <div>
        <li class="media bg-white rounded p-2 shadow mt-3 d-flex">
        <img class="mr-3" :src="product.image_url" alt="product" width="80px">
        <div class="media-body">
            <h5 class="mt-0">{{ product.name }}</h5>
            
            <h6>
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-tags-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M3 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 7.586 1H3zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                    <path d="M1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"/>
                </svg>
                Rp. {{ product.price }}
            </h6>
            <h6>
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg>
                Stock {{ product.stock }} pcs
                <div><button @click="deleteProduct(product.id)" class="btn btn-danger btn-sm rounded" style="float: right;" type="button">Delete</button></div>
                <ModalUpdate @updateProduct="updateProduct" :product="product" />
            </h6>
        </div>
        </li>
    </div>
</template>

<script>
import ModalUpdate from './ModalUpdate'

export default {
  name: 'ProductList',
  props: ['product'],
  methods: {
    deleteProduct (id) {
      this.$emit('deleteProduct', id)
    },
    updateProduct (payload) {
      this.$emit('updateProduct', payload)
    }
  },
  components: {
    ModalUpdate
  }
}
</script>

<style>

</style>
