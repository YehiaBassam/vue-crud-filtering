<template>
  <Header />

  <main class="container">
    <items />
  </main>
</template>


<script>
import Header from './components/Shared/Header.vue'
import Items from './components/Items/Items.vue'

export default {
  components: {
    Header,
    Items,
  },
}
</script>
