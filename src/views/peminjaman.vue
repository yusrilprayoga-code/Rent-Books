<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <div class="title">
            <h1>Peminjaman</h1>
        </div>
        <div class="peminjaman">
            <table class="table table-striped">
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
                    <tr>
                        <th scope="row">1</th>
                        <td>Harry Potter</td>
                        <td>John Doe</td>
                        <td>2021-08-01</td>
                        <td>2021-08-08</td>
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
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PeminjamanView'
}
</script>

<style>
    .title {
        text-align: center;
        padding: 20px;
    }
    .peminjaman {
        padding: 20px;
    }
</style>