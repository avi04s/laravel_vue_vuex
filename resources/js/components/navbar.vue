<template>
  <div style="margin-top: -24px">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                 <router-link to="/dashboard" style="color:white;text-decoration: none;">
                    Home
                  </router-link>
              </a>
            </li>

            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  <router-link to="/profile" style="color:white;text-decoration: none;">
                    Profile
                  </router-link>
                </a>
            </li>

            <!-- <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li> -->
          </ul>

          <ul class="navbar-nav mb-2 mb-lg-0" style="padding-right: 60px">
            <!--<li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>-->

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Hello, {{ user.name }}
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#" @click="logout()">Logout</a>
                </li>
                <!-- <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>-->
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "navbar",
  data() {
    return {
      //user: '',
      //isLoggedIn:'',
    };
  },

  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },

    ...mapGetters({ user: "getUser" }),
  },
  created() {
    if (this.isLoggedIn) {
      this.$store.dispatch("getUser");
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
};
</script>
