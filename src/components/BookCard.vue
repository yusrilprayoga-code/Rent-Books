<template>
    <div class="container mt-3">
        <div v-if="loading" class="loading">
            <div class="spinner-border text-primary align-content-center justify-content-center" role="status"></div>
        </div>
        <div v-else class="row">
            <div v-for="book in books" :key="book.id" class="col-md-3">
                <div class="card mb-3">
                    <img :src="`http://127.0.0.1:8000/storage/cover/` + book.cover" height="400px" alt="">
                    <div class="card-body">
                        <h5 class="card-title">{{ book.title }}</h5>
                        <p class="card-text">{{ book.author }}</p>
                        <a class="btn btn-primary">Description</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'BookCard',
    data() {
        return {
            loading: false,
            books: []
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
}
</script>

<style></style>