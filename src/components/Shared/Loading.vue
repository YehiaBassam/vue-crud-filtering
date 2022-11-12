<template>
  <div v-if="loading">
    <div v-for="i in 3" :key="i" class="spinner-grow text-secondary ms-3" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        loading: {
            type: Boolean,
            required: true,
        }
    }
}
</script>
