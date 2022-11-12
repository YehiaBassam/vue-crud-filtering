<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li
        v-for="(page, index) in pages"
        :key="page"
        style="cursor:pointer"
        class="page-item"
        :class="index == currentPage ? 'active' : null"
      >
        <a class="page-link" @click="changePage(page)">
          {{ page }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    pages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  methods: {
    changePage(page) {
      this.$emit('changePage', page - 1)
    },
  },
};
</script>

<style scoped>
.page-link{
  color: #3b4260;
}
.active>.page-link{
  background-color: #3b4260  ;
  border-color:#3b4260 ;
  color: white;
}
</style>
