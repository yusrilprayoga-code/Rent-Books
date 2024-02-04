<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="home">
    <div class="row justify-content-start">
      <div class="col-3">
        <h2>Tambah Buku</h2>
        <div class="card">
          <img v-if="preview" :src="preview" height="400px" alt="preview">
        </div>
      </div>
      <div class="col-9">
        <form class="form-input" @submit.prevent="addbook()">
          <div class="input mb-3">
            <label for="title" class="form-label">Judul</label>
            <input type="text" id="title" class="form-control" v-model="title" required />
          </div>
          <div class="input mb-3">
            <label for="author" class="form-label">Pengarang</label>
            <input type="text" id="author" class="form-control" v-model="author" required />
          </div>
          <div class="input mb-3">
            <label for="year" class="form-label">Tahun Terbit</label>
            <input type="text" id="year" class="form-control" v-model="year" required />
          </div>
          <div class="input mb-3">
            <label for="image" class="form-label">Cover</label>
            <input type="file" class="form-control" id="image" @change="handleFileChange" required />
          </div>
          <div class="input mb-3">
            <label for="desc" class="form-label">Deskripsi</label>
            <textarea id="desc" class="form-control" rows="5" v-model="deskripsi" required></textarea>
          </div>
          <div class="input mb-3 d-grid">
            <button type="submit" class="btn btn-success">Tambah</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from 'axios';

const title = ref("");
const author = ref("");
const year = ref("");
const cover = ref("");
const preview = ref("");
const deskripsi = ref("");

const handleFileChange = async (e) => {
  console.log(e.target.files[0]);
  cover.value = e.target.files[0];
  preview.value = URL.createObjectURL(e.target.files[0]);
};

const addbook = async () => {
  const formData = new FormData();
  formData.append("title", title.value);
  formData.append("author", author.value);
  formData.append("year", year.value);
  formData.append("file", cover.value);
  formData.append("desc", deskripsi.value);

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
  setTimeout(() => {
    window.location.href = "#/books";
  }, 1000);
};


</script>

<style>
.form-input {
  width: 60%;
  margin-left: 40px;
}
</style>
