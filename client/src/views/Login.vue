<template>
    <section class="container">
        <div class="row justify-content-center mt-5">
            <div class="shadow p-4 mb-5 bg-white rounde">
                <center>
                    <img src="../assets/admin.png" alt="admin" class="img-fluid" width="200px"><br><br>
                    <h5><b>Admin login</b></h5><br>
                </center>
                <form @submit.prevent="login">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input
                            v-model="email"
                            type="email"
                            class="form-control"
                            id="login-email"
                            aria-describedby="emailHelp"
                            placeholder="Input your email here..">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input
                            v-model="password"
                            type="password"
                            class="form-control"
                            id="login-password"
                            placeholder="Input your password here..">
                    </div>
                    <div class="col text-center mt-4">
                        <button type="submit" class="btn btn-primary btn-block rounded"
                        style="align-content: center;">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
    }
  }
}
</script>

<style>

</style>
