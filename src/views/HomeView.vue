<template>
  <div class="home">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col">
        <div class="card bg-success-subtle">
          <div class="card-body">
            <h1 class="text-center">1</h1>
            <i class="bx bx-user homei"></i>
            <h5 class="card-title">User</h5>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card bg-primary-subtle">
          <div class="card-body">
            <h1 class="text-center">
              {{ books.length }}
            </h1>
            <i class="bx bx-book homei"></i>
            <h5 class="card-title">All Books</h5>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card bg-warning-subtle">
          <div class="card-body">
            <h1 class="text-center">
              {{ books.length }}
            </h1>
            <i class="bx bx-book homei"></i>
            <h5 class="card-title">Peminjaman</h5>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card bg-danger-subtle">
          <div class="card-body">
            <h1 class="text-center">
              {{ books.length }}
            </h1>
            <i class="bx bx-book homei"></i>
            <h5 class="card-title">Pengembalian</h5>
          </div>
        </div>
      </div>
    </div>

    <!-- Riwayat Table -->
    <RiwayatView />
  </div>
</template>

<script>
import axios from "axios";
import RiwayatView from "@/components/riwayat.vue";
export default {
  name: "HomeView",
  components: {
    RiwayatView,
  },
  data() {
    return {
      books: [],
    };
  },

  methods: {
    async getBooks() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/books");
        console.log(response.data.data);
        this.books = response.data.data;
      } catch (error) {
        console.error(error);
      }
    },

  },

  mounted() {
    this.getBooks();
  },
};
</script>

<style>
.home {
  margin: 50px auto;
  max-width: 1200px;
  padding: 0 20px 0 15px;
}

.homei {
  font-size: 30px;
  margin: 0 auto;
}
</style>
