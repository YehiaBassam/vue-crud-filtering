<template>
  <!-- Loading -->
  <Loading v-if="loading" :loading="loading"/>

  <!-- Cards -->
  <div v-else class="row g-5 py-5">
    <div v-for="item in items" :key="item.id" class="col-12 col-sm-6 col-xl-3">
      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center" >
          <b># {{ item.id }} </b>
          <i class="fas fa-band-aid"></i>
          <i class="bi bi-pencil-square" style="cursor: pointer"></i>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Arabic : {{ item.arrivingArabicName }} </li>
          <li class="list-group-item">English : {{ item.arrivingEnglishName }} </li>
          <li class="list-group-item">sort : {{ item.sort }} </li>
        </ul>
      </div>
    </div>

    <!-- Pagination -->
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item active"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav> 
  </div>
</template>

<script>
import axios from 'axios';
import Loading from './Loading.vue'


export default {
  components:{
    Loading,
  },
  data(){
    return{
      items: [],
      loading : false,
    }
  },
  created(){
    this.loading = true;
    axios.get('http://40.127.194.127:777/api/Emergency/GetAllArrivingMethods?first=0&page=0&rows=10')
    .then ((res) =>{
      this.items = res.data.data;
      this.loading = false;
    })
  },  
}
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
