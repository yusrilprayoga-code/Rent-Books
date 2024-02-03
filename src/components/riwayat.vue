<template>
    <div class="container mt-3">
      <div v-if="loading" class="loading">
        <div class="spinner-border text-primary align-content-center justify-content-center" role="status">
        </div>
      </div>
      <div v-else>
        <table class="table table-responsive table-striped">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Judul</th>
              <th scope="col">Pengarang</th>
              <th scope="col">Tahun</th>
              <th scope="col">Cover</th>
              <th scope="col">Deskripsi</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(book, index) in books" :key="book.id">
              <th scope="row">{{ index+1 }}</th>
              <td>{{ book.title }}</td>
              <td>{{ book.author }}</td>
              <td>{{ book.year }}</td>
              <td>
                <img :src="`http://127.0.0.1:8000/storage/cover/` + book.cover" alt="book" width="100" />
              </td>
              <td>{{ book.desc }}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-success"
                >
                  <i class="bx bx-check-circle"></i>
                  Success
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    name: "RiwayatView",
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
        } catch (error) {
          console.error(error);
        } finally {
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
  