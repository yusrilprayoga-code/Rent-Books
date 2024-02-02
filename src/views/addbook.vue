<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="form mt-2 shadow">
    <div class="title text-center">Add Book</div>
    <form class="form-input" @submit.prevent="addbook">
      <!-- <input type="hidden" name="id" v-model="id" /> -->
      <div class="input mb-3">
        <label for="title" class="form-label">Judul</label>
        <input type="text" id="title" class="form-control" v-model="title" />
      </div>
      <div class="input mb-3">
        <label for="author" class="form-label">Pengarang</label>
        <input type="text" id="author" class="form-control" v-model="author" />
      </div>
      <div class="input mb-3">
        <label for="year" class="form-label">Tahun Terbit</label>
        <input type="text" id="year" class="form-control" v-model="year" />
      </div>
      <div class="input mb-3">
          <label for="image" class="form-label">Cover</label>
          <input type="file" class="form-control" id="image" @change="handleFileChange($event)" />
        </div>
        <div class="input mb-3">
          <label for="desc" class="form-label">Deskripsi</label>
          <textarea id="desc" class="form-control" v-model="deskripsi"></textarea>
        </div>
        <div class="input mb-3">
          <label for="status" class="form-label">Status</label>
          <select class="form-select" v-model="selectedStatus" aria-label="Default select example">
            <option selected disabled>Select Status</option>
            <option value="1">Success</option>
            <option value="2">Peminjaman</option>
            <option value="3">Dipinjam</option>
          </select>
        </div>
      <div class="input mb-3 d-grid">
        <button type="submit" class="btn btn-primary">Add</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from 'axios';

const title = ref("");
const author = ref("");
const year = ref("");

const addbook = async () => {
  const formData = new FormData();
  formData.append("title", title.value);
  formData.append("author", author.value);
  formData.append("year", year.value);

  try {
    axios.post("http://127.0.0.1:8000/api/books/add", formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
    })
      .then(response => {
        console.log("Book added successfully:", response.data);
        this.$router.push("/books");
      })
      .catch(error => {
        console.error("Error adding book:", error.response ? error.response.data : error.message);
      });
  } catch (error) {
    console.error("Error adding book:", error);
  }
  window.location.href = "#/books";
};


</script>

<style>
.form-input {
  width: 70%;
  margin: 0 auto;
}

.form {
  width: fit-content;
  padding: 20px;
  position: relative;
  align-items: center;
  margin: 0 auto;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-label {
  font-weight: bold;
}

.form-control {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
  border: none;
}

.btn-primary:hover {
  background-color: #0056b3;
}
</style>
