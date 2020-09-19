<template>
    <div>
        <button v-b-modal="'product-' + product.id" class="btn btn-success btn-sm rounded" style="float: right; margin-right: 15px;" type="button">Edit</button>
        <b-modal
        :id="'product-' + product.id"
        title="Update Product"
        @ok="handleOk"
        ref="modal-update">
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
    name: 'ModalUpdate',
    data () {
        return {
            name: this.product.name,
            image_url: this.product.image_url,
            price: this.product.price,
            stock: this.product.stock,
            id: this.product.id
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
            this.$emit('updateProduct', {
                id: this.id,
                name: this.name,
                image_url: this.image_url,
                price: this.price,
                stock: this.stock
            })
            this.$nextTick(() => {
                this.$bvModal.hide('product-' + this.product.id)
            })
        }
    },
    props: ['product']
}
</script>

<style>

</style>