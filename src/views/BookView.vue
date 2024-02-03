<template>
  <div class="home">
    <h2 class="text-center">Koleksi Buku</h2>
    <router-link to="/books/addbook" class="btn btn-success">
      <i class="bx bx-plus"></i>
      <span class="text">Tambah Buku</span>
    </router-link>
    <BookCard />
  </div>
</template>

<script>
import axios from "axios";
import BookCard from "@/components/BookCard.vue";


export default {
  name: "BookView",
  components: {
    BookCard
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
