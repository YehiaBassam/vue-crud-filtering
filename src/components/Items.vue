<template>
  <!-- Add New Item -->
  <add-item @addNewItem="getItems" />

  <!-- Loading -->
  <div v-if="loading" class="flex-center" style="height:80vh">
    <Loading :loading="loading"/>
  </div>

  <!-- Cards -->
  <div v-else>
    <div v-if="items.length > 0" class="row g-5 py-5">
      <div v-for="item in items" :key="item.id" class="col-12 col-sm-6 col-xl-3">
        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center" >
            <b># {{ item.id }} </b>
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
  
    <h3 v-else>
      There is no data
    </h3>
  </div>
</template>

<script>
import api from '../api.js';
import AddItem from './AddItem.vue'
import Loading from './Loading.vue'

export default {
  components:{
    AddItem,
    Loading,
  },
  data(){
    return{
      items: [],
      loading : false,
    }
  },
  created(){
    this.getItems();
  },  
  methods:{
    getItems(){
      this.loading = true;
      api.get('GetAllArrivingMethods?first=0&page=0&rows=10')
      .then ((res) =>{
        this.items = res.data.data;
        this.loading = false;
      });
    }
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
