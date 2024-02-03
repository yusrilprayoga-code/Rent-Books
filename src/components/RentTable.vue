<template>
    <div class="container">
        <div class="title mt-3">
            <h2>Daftar Peminjam</h2>
        </div>
        <div v-if="loading" class="loading">
            <div class="spinner-border text-primary align-content-center justify-content-center" role="status"></div>
        </div>
        <div v-else class="peminjaman">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Judul</th>
                        <th scope="col">Peminjam</th>
                        <th scope="col">Tanggal Pinjam</th>
                        <th scope="col">Tanggal Kembali</th>
                        <th scope="col">Status</th>
                        <th scope="col">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(rental, index) in rentals" :key="rental.id">
                        <th scope="row">{{ index+1 }}</th>
                        <td>{{ rental.book.title }}</td>
                        <td>{{ rental.peminjam }}</td>
                        <td>{{ formatDate(rental.created_at) }}</td>
                        <td>{{ formatDate(rental.updated_at) }}</td>
                        <td>
                            <div class="btn btn-success">
                                <i class="bx bx-check-circle"></i>{{ rental.status }}
                            </div>
                        </td>
                        <td>
                            <div class="btn-group">
                                <button class="btn btn-warning">Edit</button>
                                <button class="btn btn-danger">Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import moment from 'moment';

export default {
    name: 'RentTable',
    data() {
        return {
            rentals: [],
            loading: false,
        };
    },
    methods: {
        formatDate(value) {
            return moment(String(value)).format('D MMMM YYYY')
        },
        async getRentals() {
            try {
                this.loading = true;
                const response  = await axios.get("http://127.0.0.1:8000/api/rent", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    },
                })
                this.rentals = response.data.data;
                console.log(this.rentals);
            } catch (error) {
                console.error(error);
            } finally {
                this.loading = false;
            }
        }
    },
    mounted() {
        this.getRentals()
    },
}
</script>

<style></style>