<template>
    <div>
        <button v-b-modal.modal-prevent-closing type="button" class="btn btn-outline-dark float-right btn-sm">Add new Product</button>
        <b-modal
        id="modal-prevent-closing"
        title="Add New Product"
        @ok="handleOk"
        ref="my-modal">
        <form ref="form" @submit.prevent="handleSubmit">
        <b-form-group
            label="Name"
            label-for="name-input"
            invalid-feedback="Name is required">

            <b-form-input
            id="name-input"
            v-model="name"
            required>
            </b-form-input>
        </b-form-group>
        <b-form-group
            label="Image Url"
            label-for="img-input"
            invalid-feedback="Image is required">

            <b-form-input
            id="img-input"
            v-model="image_url"
            required>
            </b-form-input>
        </b-form-group>
        <b-form-group
            label="Price"
            label-for="price-input"
            invalid-feedback="Price is required">

            <b-form-input
            type= "number"
            id="price-input"
            v-model="price"
            required>
            </b-form-input>
        </b-form-group>
        <b-form-group
            label="Stock"
            label-for="stock-input"
            invalid-feedback="Stock is required">

            <b-form-input
            type="number"
            id="stock-input"
            v-model="stock"
            required>
            </b-form-input>
        </b-form-group>
        </form>
        </b-modal>
    </div>
</template>

<script>
export default {
  name: 'ModalAdd',
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    handleOk (bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit () {
      this.$emit('addProduct', {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      })
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
    }
  }
}
</script>

<style>

</style>
