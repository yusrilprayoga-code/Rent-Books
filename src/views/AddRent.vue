<template>
  <div class="home">
    <div class="row justify-content-start">
      <div class="col-3">
        <h2>Tambah Peminjam</h2>
        <hr />
      </div>
      <div class="col-9">
        <form class="form-input" @submit.prevent="addrent()">
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

<script>
export default {
  name: "AddRent",
  data() {
    return {
      loading: false,
      rents: [],
    }
  }

}
</script>

<style>

</style>