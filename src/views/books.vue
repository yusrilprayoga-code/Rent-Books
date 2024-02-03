<template>
  <div class="home">
    <h3 class="text-center">All Books</h3>
    <router-link to="/books/addbook" class="btn btn-success">
      <i class="bx bx-plus"></i>
      <span class="text">Tambah Buku</span>
    </router-link>
    <div v-if="loading" class="loading">
      <div class="spinner-border text-primary align-content-center justify-content-center" role="status"></div>
    </div>
    <div v-else>  
      <riwayat />
    </div>
  </div>
  </template>

<script>
import axios from "axios";
import Riwayat from "@/components/riwayat.vue";


export default {
  name: "BooksView",
  components: {
    Riwayat
  },
  data() {
    return {
      books: [],
      loading: false,
    };
  },
  methods: {
    async getBooks() {
      try {
        this.loading = true;
        const response = await axios.get("http://127.0.0.1:8000/api/books");
        this.books = response.data.data;
      }
      catch (error) {
        console.error(error);
      }
      finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.getBooks();
  },
};
</script>

<style>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
