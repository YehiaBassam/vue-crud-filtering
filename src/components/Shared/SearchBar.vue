<template>
  <div class="input-group p-3 mt-3 mx-1 shadow-sm rounded">
    <span class="input-group-text">
      <i class="bi bi-search"></i>
    </span>
    <input
      v-model="search"
      type="text"
      class="form-control"
      placeholder="search by arabic or english name"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  watch: {
    search(val) {
      this.$emit("search", val);
    },
  },
};
</script>
