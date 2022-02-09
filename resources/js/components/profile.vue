<template>
  <div>
    <navbar />

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">Profile</div>

            <div class="card-body">
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label"
                    >Name</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    v-model="name"
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
                    aria-describedby="emailHelp"
                    v-model="email"
                    readonly
                  />
                </div>

                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >Upload Profile Photo</label
                  >
                <input class="form-control" type="file" id="formFile" v-on:change="onChange"  >
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "./navbar.vue";
import { mapGetters, mapState } from "vuex";

export default {
  components: {
    navbar,
  },

  data(){
      return {
         //name:null,
         photo:null,
        
      }
  },

  computed: {
   // ...mapGetters({ user: "getUser" }),

   name:{
       get(){
           return this.$store.getters.getUser.name;
       }
   },

    email:{
       get(){
           return this.$store.getters.getUser.email;
       }
   }

   
  },

  methods:{
       onChange(e) {
            this.photo = e.target.files[0];
        },
  }


};
</script>
