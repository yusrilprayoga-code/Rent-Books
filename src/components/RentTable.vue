<template>
    <div class="container mt-3">
        <div v-if="loading" class="loading">
            <div class="spinner-border text-primary align-content-center justify-content-center" role="status"></div>
        </div>
        <div v-else class="peminjaman text-center">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Peminjam</th>
                        <th scope="col">Judul</th>
                        <th scope="col">Tanggal Pinjam</th>
                        <th scope="col">Tanggal Kembali</th>
                        <th scope="col">Status</th>
                        <th scope="col">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(rental, index) in rentals" :key="rental.id">
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ rental.peminjam }}</td>
                        <td>{{ rental.book.title }}</td>
                        <td>{{ formatDate(rental.created_at) }}</td>
                        <td>{{ rental.status != "Dipinjam" ? formatDate(rental.updated_at) : "-" }}</td>
                        <td>
                            <div v-if="rental.status == 'Dikembalikan'" class="btn btn-sm btn-success">
                                <i class="bx bx-check-circle"></i>{{ rental.status }}
                            </div>
                            <div v-if="rental.status == 'Dipinjam'" class="btn btn-sm btn-warning">
                                <i class="bx bx-loader"></i>{{ rental.status }}
                            </div>
                        </td>
                        <td>
                            <div class="btn-group">
                                <button class="btn btn-sm btn-success" :disabled="rental.status == 'Dikembalikan'"
                                    @click="dikembalikan(rental.id)">Selesai</button>
                                <button class="btn btn-sm btn-danger" :disabled="rental.status == 'Dipinjam'">Hapus</button>
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
                const response = await axios.get("http://127.0.0.1:8000/api/rent", {
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
        },
        dikembalikan(id) {
            if (confirm("Yakin ?") == true) {
                const formData = new FormData();
                formData.set("status", "Dikembalikan");
    
                try {
                    axios.post("http://127.0.0.1:8000/api/store/" + id, formData, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                            "Content-Type": "multipart/form-data",
                        },
                    })
                        .then(response => {
                            console.log("Data updated successfully:", response.data);
                            this.$router.push("/rent");
                            setTimeout(() => {
                                this.$router.go();
                                alert("Data berhasil diubah");
                            }, 10);
                        })
                        .catch(error => {
                            alert("Gagal mengubah data")
                            console.error("Error adding book:", error.response ? error.response.data : error.message);
                        });
                } catch (error) {
                    console.error("Error adding book:", error);
                }
                console.log(formData);
            }
        },
    },
    mounted() {
        this.getRentals()
    },
}
</script>

<style></style>