<template>
  <div class="container mt-3">
    <div v-if="loading" class="loading">
      <div
        class="spinner-border text-primary align-content-center justify-content-center"
        role="status"
      ></div>
    </div>
    <div v-else class="row">
      <div v-for="(book, index) in books" :key="book.id" class="col-md-3">
        <div v-if="index < limit" class="card mb-3">
          <img
            :src="`http://127.0.0.1:8000/storage/cover/` + book.cover"
            height="300px"
            alt=""
          />
          <div class="card-body">
            <h6 class="card-title">{{ book.title }} ({{ book.year }})</h6>
            <p class="card-text">{{ book.author }}</p>
            <a
              class="btn btn-sm btn-success"
              data-bs-toggle="modal"
              :data-bs-target="'#desc' + book.id"
              >Deskripsi</a
            >
          </div>
          <!-- Modal -->
          <div
            class="modal fade"
            :id="'desc' + book.id"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    {{ book.title }}
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col-4">
                      <img
                        :src="
                          `http://127.0.0.1:8000/storage/cover/` + book.cover
                        "
                        width="150px"
                        alt=""
                      />
                    </div>
                    <div class="col">
                      <p>{{ book.desc }}</p>
                      <h6>{{ book.author }}</h6>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-success"
                    data-bs-dismiss="modal"
                  >
                    Tutup
                  </button>
                  <button
                    v-if="$route.name != 'BookView'"
                    type="button"
                    class="btn btn-sm btn-success"
                  >
                    Pinjam
                  </button>
                  <div v-else class="btn-group">
                    <button
                      type="button"
                      class="btn btn-sm btn-success"
                      @click="$router.push('/books/' + book.id)"
                      data-bs-dismiss="modal"
                    >
                      Ubah
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm btn-danger"
                      @click="deletebook(book.id)"
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BookCard",
  props: ["limit"],
  data() {
    return {
      loading: false,
      books: [],
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

    deletebook(id) {
      if (confirm("Apakah Anda yakin ingin menghapus buku ini?")) {
        axios
          .delete(`http://127.0.0.1:8000/api/books/` + id, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((response) => {
            console.log("Book deleted successfully:", response.data);
            this.getBooks();
            this.$router.go();
          })
          .catch((error) => {
            console.error(
              "Error deleting book:",
              error.response ? error.response.data : error.message
            );
          });
      }
    },
  },
  mounted() {
    this.getBooks();
  },
};
</script>

<style></style>
