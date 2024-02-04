<template>
  <div class="home">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col">
        <div class="card bg-success-subtle">
          <div class="card-body">
            <h1 class="text-center text-success">
              {{ rental.length }}
            </h1>
            <i class="bx bx-user homei text-success"></i>
            <h5 class="card-title text-success">User</h5>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card bg-success-subtle">
          <div class="card-body">
            <h1 class="text-center text-success">
              {{ books.length }}
            </h1>
            <i class="bx bx-book homei text-success"></i>
            <h5 class="card-title text-success">Jumlah Buku</h5>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card bg-success-subtle">
          <div class="card-body">
            <h1 class="text-center text-success">
              {{ rents.length }}
            </h1>
            <i class="bx bx-book homei text-success"></i>
            <h5 class="card-title text-success">Dipinjam</h5>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card bg-success-subtle">
          <div class="card-body">
            <h1 class="text-center text-success">
              {{ returned.length }}
            </h1>
            <i class="bx bx-book homei text-success"></i>
            <h5 class="card-title text-success">Pengembalian</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <h3 class="">Koleksi Buku</h3>
      </div>
      <div class="col text-end">
        <button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Lihat Daftar Peminjam
        </button>
      </div>
    </div>
    <BookCard limit="4" />

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Daftar Peminjam</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <RentTable />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-success" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import RentTable from "@/components/RentTable.vue";
import BookCard from "@/components/BookCard.vue";
export default {
  name: "HomeView",
  components: {
    RentTable, 
    BookCard
  },
  data() {
    return {
      books: [],
      rental: [],
      rents: [],
      returned: []
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
    async getRentals() {
      try {
        this.loading = true;
        const response = await axios.get("http://127.0.0.1:8000/api/rent", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          },
        })
        this.rental = response.data.data;
        this.rents = response.data.data.filter(item => item.status === "Dipinjam").map(item => {
          return {
            item
          }
        });
        this.returned = response.data.data.filter(item => item.status === "Dikembalikan").map(item => {
          return {
            item
          }
        });
        console.log(this.rentals);
      } catch (error) {
        console.error(error);
      }
    }

  },

  mounted() {
    this.getBooks();
    this.getRentals();
  },
};
</script>

<style>
.home {
  margin: 50px auto;
  max-width: 1000px;
  padding: 0 20px 0 15px;
}

.homei {
  font-size: 30px;
  margin: 0 auto;
}
</style>
