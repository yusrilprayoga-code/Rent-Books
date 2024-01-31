<template>
  <div class="d-flex">
    <sidebar />
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
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: poppins, sans-serif;
}
</style>
