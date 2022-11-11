<template>
  <!-- Cards -->
  <div class="row g-5 py-5">
    <div v-for="i in 10" :key="i" class="col-12 col-sm-6 col-xl-3">
      <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center" >
          <span># 11</span>
          <i class="fas fa-band-aid"></i>
          <i class="bi bi-pencil-square" style="cursor: pointer"></i>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">arriving Arabic Name : ssss</li>
          <li class="list-group-item">arriving English Name : dddd</li>
          <li class="list-group-item">sort : 2</li>
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
