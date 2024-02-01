<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg my-5 bg-light">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray mb-4">Welcome Back!</h1>
                  </div>
                  <hr />
                  <form @submit.prevent="login">
                    <div class="mb-3">
                      <label for="email" class="form-label"
                        >Email </label
                      >
                      <input
                      v-model="email"
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="Masukkan email..."
                      />    
                    </div>
                    <div class="mb-3">
                      <label for="password" class="form-label"
                        >Password</label
                      >
                      <input
                        type="password"
                        v-model="password"
                        class="form-control"
                        id="password"
                        placeholder="Masukkan password..."
                      />
                    </div>
                    <div class="d-grid gap-2">
                      <button class="btn btn-success" type="submit">
                        Login
                      </button>
                    </div>
                  </form>
                  <hr />
                  <div class="text-center mb-2">
                  <router-link to="" class="small"
                      >Forgot Password?</router-link
                    >
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    login() {
      if (this.email === "" || this.password === "") {
        return; 
      }
      axios
        .post("http://127.0.0.1:8000/api/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          const token = response.data;
          console.log("Token:", token);
          localStorage.setItem("token", token);
          this.$root.$emit("updateAuthToken");
          window.location.href = "/";
        })
        .catch((error) => {
          console.error(error);
        });
      },
  },

  mounted() {
    if (localStorage.getItem("token")) {
      this.$router.push("/");
    }
  },
};
</script>

<style>
.bg-login-image {
  background: url(../assets/login.png);
  background-position: center;
  background-size: cover;
}
</style>
