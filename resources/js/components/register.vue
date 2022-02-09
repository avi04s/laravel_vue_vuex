<template>
  <div>
    <div class="container" style="margin-top: 100px">
      <div class="row">
        <div class="col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-center fw-bold">Sign In</h5>
              <hr />

              <form action="" method="post" @submit.prevent="register">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label"
                    >Name</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp" v-model="form.name"
                  />
                </div>
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

                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >Confirm Password</label
                  >
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1" v-model="form.password_confirmation"
                  />
                </div>

                <div class="d-grid gap-2">
                  <button type="submit" class="btn btn-outline-primary">
                    Sign Up
                  </button>
                </div>
                <div class="mt-2 text-center">
                  Already Register ? <router-link to="/">Sign In</router-link>
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
import { mapActions, mapGetters } from 'vuex';
export default {
  name:'register',
  components: {},

  data(){
      return {
          form:{
              name:null,
              email:null,
              password:null,
              password_confirmation:null,
          }, 
          showError : false,
      }
  },

  computed: {
      ...mapGetters({errors : "getError"})
  },

  methods:{
      ...mapActions(["Register"]),

      register: function() {
          let data = {
              name : this.form.name,
              email : this.form.email,
              password : this.form.password,
              password_confirmation : this.form.password_confirmation
          };

          this.$store.dispatch('Register', data)
          .then(()=> this.$router.push('/dashboard'))
          .catch(err =>{
              this.showError = true;
          })
      }
  }


};
</script>
