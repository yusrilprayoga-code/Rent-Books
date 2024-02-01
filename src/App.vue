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
      loggedIn: true,
    };
  },

  methods: {

  },
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: poppins, sans-serif;
}
</style>
