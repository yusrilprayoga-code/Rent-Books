<template>
    <div class="d-flex">
    <aside :class="{ 'is-expanded': is_expanded }">
    <div class="d-flex justify-content-center align-items-center mt-2 logo">
      <img src="./assets/logo.png" alt="logo" width="50" />
      <div class=" ms-2">
        <h3 class="mb-0">Vue Admin</h3>
        <small>Admin Template</small>
      </div>  
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="toggleMenu">
        <i class="bx bx-chevron-left"></i>
      </button>
    </div>
    <div class="menu">
      <router-link to="/" class="button">
        <i class="bx bxs-dashboard"></i>
        <span class="text">Dashboard</span>
      </router-link>
      <router-link to="/about" class="button">
        <i class="bx bx-file"></i>
        <span class="text">About</span>
      </router-link>
      <router-link to="/team" class="button">
        <i class="bx bx-group"></i>
        <span class="text">Team</span>
      </router-link>
      <router-link to="/contact" class="button">
        <i class="bx bx-envelope"></i>
        <span class="text">Contact</span>
      </router-link>
    </div>

    <div class="flex"></div>
    <div class="menu footer">
      <router-link to="/settings" class="button">
        <i class="bx bx-cog"></i>
        <span class="text">Settings</span>
      </router-link>
    </div>
    </aside>
    <div class="content">
      <router-view />
    </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const is_expanded = ref(
  localStorage.getItem('is_expanded') === 'true' || false
);

const toggleMenu = () => {
  is_expanded.value = !is_expanded.value;
  localStorage.setItem('is_expanded', is_expanded.value.toString());
};


</script>

<style>
* {
  box-sizing: border-box;
  font-family: poppins, sans-serif;
}

aside {
  background-color: #2c3e50; 
  color: #ecf0f1; 
  width: 250px; 
  height: 100vh;
  overflow: hidden;
  transition: width 0.3s ease; 
}

.logo {
  margin-bottom: 20px;
  padding: 10px;
  border-bottom: 1px solid #34495e;
}

.logo img {
  border-radius: 50%;
  border: 1px solid #34495e;
  padding: 5px;
}

.logo h3 {
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.logo small {
  font-size: 0.7rem;
  color: #bdc3c7;
}



.content {
  flex: 1;
  padding-left: 20px;
}

.menu-toggle-wrap {
  text-align: center;
  padding: 10px;
}

.menu-toggle {
  background-color: transparent;
  border: none;
  color: #ecf0f1;
  font-size: 1.5rem;
}

.menu {
  padding: 10px;
}

.footer {
  bottom: 0;
  position: absolute;
}

.button {
  display: flex;
  align-items: center;
  color: #ecf0f1;
  text-decoration: none;
  padding: 10px;
  transition: background-color 0.3s ease; 
}

.button:hover {
  background-color: #34495e; 
}

.text {
  margin-left: 10px;
}
i {
  margin-right: 8px;
}
.flex {
  flex: 1;
}
.is-expanded {
  width: 80px; 
}

.is-expanded .menu h3 {
  display: none; 
}

.is-expanded .menu .button .text {
  display: none; 
}

.is-expanded .menu .button i {
  margin-right: 0; 
}

.is-expanded .menu-toggle i {
  transform: rotate(180deg);
}

.is-expanded .logo small {
  display: none; 
}

.is-expanded .logo h3 {
  display: none;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  aside.is-expanded {
    width: 100%;
  }
}

</style>
