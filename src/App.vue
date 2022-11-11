<template>
  <Header />

  <main class="container">
    <items />
  </main>
</template>


<script>
import Header from './components/Header.vue'
import Items from './components/Items.vue'

export default {
  components: {
    Header,
    Items,
  },
}
</script>
