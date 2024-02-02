<template>
  <div class="home mt-5">
    <div class="title">
      <h3 class="text-center">All Books</h3>
      <div class="create">
        <router-link to="/books/addbook" class="btn btn-success mb-3">
          <i class="bx bx-plus"></i>
          <span class="text">Tambah Buku</span>
        </router-link>
      </div>
    </div>
    <div v-if="loading" class="loading">
      <div class="spinner-border text-primary align-content-center justify-content-center" role="status"></div>
    </div>
    <div v-else>
      <!-- <table class="table table-responsive table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Judul</th>
            <th scope="col">Pengarang</th>
            <th scope="col">Tahun Terbit</th>
            <th scope="col">Cover</th>
            <th scope="col">Deskripsi</th>
            <th scope="col">Status</th>
            <th scope="col">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in books" :key="book.id">
            <th scope="row">{{ book.id }}</th>
            <td>{{ book.title }}</td>
            <td>{{ book.author }}</td>
            <td>{{ book.year }}</td>
            <td>
              <img :src="book.cover" alt="Book Cover" width="100" />
            </td>
            <td>
              <p>{{ book.desc.substring(0, 10) }}{{ book.desc.length > 10 ? '...' : '' }}</p>
            </td>
            <td>
              <button type="button" class="btn btn-success">
                <i class="bx bx-check-circle"></i> Success
              </button>
            </td>
            <td>
              <button class="btn btn-warning">Edit</button>
              <button class="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table> -->
      <riwayat />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Riwayat from "@/components/riwayat.vue";

export default {
    name: "BooksView",
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
    components: { Riwayat }
};
</script>

<style>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
