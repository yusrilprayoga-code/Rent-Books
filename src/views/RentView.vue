<template>
  <div class="home">
    <h2 class="text-center">Daftar Peminjaman</h2>
    <router-link to="/rent/add" class="btn btn-outline-success ">
      <i class="bx bx-plus"></i>
      <span class="text">Tambah Peminjam</span>
    </router-link>
    <RentTable />
  </div>
</template>

<script>
import RentTable from "@/components/RentTable.vue";
export default {
  name: "RentView",
  components: {
    RentTable,
  },
};
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
