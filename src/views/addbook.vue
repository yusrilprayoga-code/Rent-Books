<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="form mt-5 shadow">
    <div class="title text-center">Add Book</div>
    <form class="form-input" @submit.prevent="addbook">
      <div class="input mb-3">
        <label for="title">Judul</label>
        <input type="text" id="title" class="form-input" />
      </div>
      <div class="input mb-3">
        <label for="author">Pengarang</label>
        <input type="text" id="author" class="form-input" />
      </div>
      <div class="input mb-3">
        <label for="year" class="form-label">Tahun Terbit</label>
        <input type="text" id="year" class="form-input" />
      </div>
      <div class="input mb-3">
        <label for="image" class="form-label">Cover</label>
        <input type="file" class="form-input" id="image" />
      </div>
      <div class="input mb-3">
        <label for="desc" class="form label">Deskripsi</label>
        <textarea id="desc" class="form-input"></textarea>
      </div>
      <div>
        <select class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="input mb-3 d-grid">
        <button type="submit" class="btn btn-primary">Add</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
    name: "AddBook",
    data() {
        return {
        }
    }
};
</script>

<style>
.form-input {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  align-items: center;
}
.form {
  width: fit-content;
  padding: 20px;
  position: relative;
  align-items: center;
  margin: 0 auto;
}
</style>
