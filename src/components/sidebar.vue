<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <aside :class="{ 'is-expanded': is_expanded }">
    <div class="d-flex justify-content-center align-items-center mt-2 logo">
      <img src="../assets/logo.png" alt="logo" width="50" />
      <div class="ms-2">
        <h3 class="mb-0">Vue Admin</h3>
        <small>
          {{ data.User.name ? data.User.name : "Loading...." }}
        </small>
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
      <router-link to="/books" class="button">
        <i class="bx bx-book"></i>
        <span class="text">Koleksi Buku</span>
      </router-link>
      <router-link to="/rent" class="button">
        <i class="bx bx-group"></i>
        <span class="text">Peminjaman</span>
      </router-link>
    </div>

    <div class="flex"></div>
    <div class="menu footer">
      <router-link to="/login" class="button" @click="logout">
        <i class="bx bx-log-out"></i>
        <span class="text">Logout</span>
      </router-link>
    </div>
  </aside>
</template>

<script setup>
import axios from "axios";
import { onMounted, reactive } from "vue";
import { ref } from "vue";

const is_expanded = ref(
  localStorage.getItem("is_expanded") === "true" || false
);

const toggleMenu = () => {
  is_expanded.value = !is_expanded.value;
  localStorage.setItem("is_expanded", is_expanded.value.toString());
}

  const data = reactive({
    User: "",
  });


const fetchUser = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/me", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    data.User = response.data;
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

const loginAuth = ref(localStorage.getItem("token") ? true : false);

const logout = async () => {
  try{
    const response = await axios.get("http://127.0.0.1:8000/api/logout", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    data.logout = response.data;
    console.log(data.logout);
    localStorage.removeItem("token");
    loginAuth.value = false;
    window.location.href = "#/login";
    setTimeout(() => {
      window.location.reload();
    }, 1);
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  fetchUser();
});
</script>

<style>
aside {
  background-color: #2c3e50;
  color: #ecf0f1;
  width: 250px;
  height: 100vh;
  overflow: hidden;
  transition: width 0.3s ease;
  position: fixed;
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

@media (max-width: 1024px) {
  aside {
    height: 100vh;
  }
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
  aside {
    height: 100vh;
  }
}

@media (max-width: 425px) {
  aside {
    height: 100v;
  }
}
</style>
