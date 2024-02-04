<template>
    <div class="home">
        <div class="row justify-content-start">
            <div class="col-3">
                <h2>Ubah Data Buku</h2>
                <div class="card">
                    <img v-if="!preview" :src="'http://127.0.0.1:8000/storage/cover/' + book.cover" height="400px"
                        alt="preview">
                    <img v-if="preview" :src="preview" height="400px" alt="preview">
                </div>
            </div>
            <div class="col-9">
                <form class="form-input" @submit.prevent="editBook()">
                    <div class="input mb-3">
                        <label for="title" class="form-label">Judul</label>
                        <input type="text" id="title" class="form-control" v-model="book.title" />
                    </div>
                    <div class="input mb-3">
                        <label for="author" class="form-label">Pengarang</label>
                        <input type="text" id="author" class="form-control" v-model="book.author" />
                    </div>
                    <div class="input mb-3">
                        <label for="year" class="form-label">Tahun Terbit</label>
                        <input type="text" id="year" class="form-control" v-model="book.year" />
                    </div>
                    <div class="input mb-3">
                        <label for="image" class="form-label">Cover</label>
                        <input type="file" class="form-control" id="image" @change="handleFileChange" />
                    </div>
                    <div class="input mb-3">
                        <label for="desc" class="form-label">Deskripsi</label>
                        <textarea id="desc" class="form-control" rows="5" v-model="book.desc"></textarea>
                    </div>
                    <div class="input mb-3 d-grid">
                        <button type="submit" class="btn btn-success">Ubah</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
  
<script >
import axios from "axios";

export default {
    name: 'EditBook',
    data() {
        return {
            preview: null,
            loading: false,
            id: this.$route.params.id,
            book: []
        };
    },
    methods: {
        handleFileChange(e) {   
            console.log(e.target.files[0]);
            this.cover = e.target.files[0];
            this.preview = URL.createObjectURL(e.target.files[0]);
        },
        async getBooks() {
            try {
                this.loading = true;
                const response = await axios.get('http://127.0.0.1:8000/api/books/' + this.id);
                this.book = response.data.data;
                console.log(this.book);
            } catch (error) {
                console.error(error);
            } finally {
                this.loading = false;
            }
        },
        editBook() {
            const formData = new FormData();
            formData.append("title", this.book.title);
            formData.append("author", this.book.author);
            formData.append("year", this.book.year);
            formData.append("desc", this.book.desc);
            if (this.cover != undefined) {
                formData.append("file", this.cover);
            }

            try {
                axios.post("http://127.0.0.1:8000/api/books/" + this.id, formData, {
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
            console.log(formData);
        }
    },
    mounted() {
        this.getBooks();
    },
}
</script>
  
<style>
.form-input {
    width: 60%;
    margin-left: 40px;
}
</style>
  