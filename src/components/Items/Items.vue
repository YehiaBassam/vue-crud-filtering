<template>
  <!-- Add & update Item -->
  <add-update-item @addNewItem="getItems" :updatedItem="updatedItem"/>

  <!-- Delete Item -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Delete Item</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Are you sure to delete this item ?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-danger" @click="deleteItem()">Confirm Delete</button>
        </div>
      </div>
    </div>
  </div>

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
            <div>
              <i :class="isItemUpdate ? 'bi bi-x' : 'bi bi-pencil-square'" style="cursor: pointer" @click="updateItem(item)"></i>
              <i v-if="!isItemUpdate" class="bi bi-x-square" style="cursor: pointer;margin-left: 10px;" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="deletedItemId = item.id"></i>
            </div>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Arabic : {{ item.arrivingArabicName }} </li>
            <li class="list-group-item">English : {{ item.arrivingEnglishName }} </li>
            <li class="list-group-item">sort : {{ item.sort }} </li>
          </ul>
        </div>
      </div>
  
      <!-- Pagination -->
      <Pagination :pages="allPages" :currentPage="currentPage" @changePage="changePage"/>
    </div>
  
    <h3 v-else>
      There is no data
    </h3>
  </div>
</template>

<script>
import api from '../../api.js';
import AddUpdateItem from './AddUpdateItem.vue'
import Pagination from '../Shared/Pagination.vue'
import Loading from '../Shared/Loading.vue'

export default {
  components:{
    AddUpdateItem,
    Pagination,
    Loading,
  },
  data(){
    return{
      items: [],
      loading: false,
      isItemUpdate: false,
      updatedItem: {},
      deletedItemId: 0,
      allPages: 0,
      currentPage: 0,
    }
  },
  created(){
    this.getItems();
  },  
  methods:{
    getItems(){
      this.loading = true;
      this.isItemUpdate = false;
      api.get(`GetAllArrivingMethods?first=0&page=${this.currentPage}&rows=10`)
      .then ((res) =>{
        this.items = res.data.data;
        this.allPages = Math.ceil(res.data.totalCount / 10);
        this.loading = false;
      });
    },
    updateItem(item){
      this.isItemUpdate = !this.isItemUpdate;
      this.isItemUpdate ? this.updatedItem = item : this.updatedItem = {};
    },
    deleteItem(){
      const data = {
        number: this.deletedItemId
      }

      api.post('DeleteArrivingMethod', data)
      .then ((res) =>{
        this.items = this.items.filter(item => item.id != this.deletedItemId);
      });
    },
    changePage(page){
      this.currentPage = page;
      this.getItems();
    },
  },
}
</script>
