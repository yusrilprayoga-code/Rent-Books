<template>
  <div class="d-flex">
    <sidebar v-if="loggedIn" />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import sidebar from "@/components/sidebar.vue";

export default {
  components: {
    sidebar, 
  },
  name: "App",
  data() {
    return {
      loggedIn: false
    };
  },
  methods: {
    isLogin() {
      const isLogin = (localStorage.getItem("token")) ? true : false
      this.loggedIn = isLogin;
    }
  },
  mounted() {
    this.isLogin()
  }, 
};

</script>

<style>
* {
  box-sizing: border-box;
  font-family: poppins, sans-serif;
}

.content {
  transition: 0.5s;
  position: relative;
  margin-left: 120px;
}
</style>
