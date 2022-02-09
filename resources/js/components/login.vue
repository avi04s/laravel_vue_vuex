<template>
  <div>

    <div class="container" style="margin-top:150px">
      <div class="row">
        <div class="col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-center fw-bold">Sign In</h5>
              <hr />

              <form action="" method="post" @submit.prevent="login"> 
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label"
                    >Email address</label
                  >
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp" v-model="form.email"
                  />
                  <div id="emailHelp" class="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >Password</label
                  >
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1" v-model="form.password"
                  />
                </div>
                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1"
                    >Check me out</label
                  >
                </div>
                <div class="d-grid gap-2">
                    <button type="submit" class="btn btn-outline-primary">Sign In</button>
                </div>
                <div class="mt-2 text-center">
                   Don't have an account ? <router-link to="/register">Sign Up</router-link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {

  name:'login',
  components: {

  },

    data(){
      return {
          form:{
 
              email:null,
              password:null,

          }, 
          showError : false,
      }
  },
  methods:{
      ...mapActions(["login"]),

      login:function () {
            this.$store.dispatch('login',this.form)
            .then(()=>this.$router.push('/dashboard'))
            .catch(err => console.log(err))
      }
  }


};
</script>
