<template>
  <Header />

  <main class="container flex-center" style="min-height:80vh">
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
