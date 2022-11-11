<template>
<form @submit.prevent="validateForm" class="row gx-4 gy-2 pb-3 mt-3 mx-1 shadow-sm rounded">
    <div class="col-12 col-sm-6 col-xl-3">
    <input
        v-model="data.arrivingArabicName"
        type="text"
        class="form-control"
        placeholder="Arriving Arabic Name"
    />
    </div>
    <div class="col-12 col-sm-6 col-xl-3">
    <input
        v-model="data.arrivingEnglishName"
        type="text"
        class="form-control"
        placeholder="Arriving English Name"
    />
    </div>
    <div class="col-12 col-sm-6 col-xl-3">
    <input
        v-model="data.sort"
        type="number"
        class="form-control"
        placeholder="sort"
    />
    </div>
    <div class="col-12 col-sm-6 col-xl-3" style="cursor: pointer">
        <button type="submit" class="btn btn-success w-100" id="liveToastBtn">Add New Item</button>
    </div>

    <!-- Error message -->
    <div v-if="errorMessage" class="flex-center mt-3">
        <div class="alert alert-danger py-2" role="alert" style="width:100%">
            {{ errorMessage }}
        </div>
    </div>
</form>


</template>

<script>
import api from "../api.js";

export default {
    data(){
        return{
            data :{
                arrivingArabicName: "",
                arrivingEnglishName: "",
                sort: 0,
                accountId: 1,
            },
            errorMessage: ""
        }
    },
    methods: {
        validateForm(){
            if ( this.data.sort < 1 ){
                this.errorMessage = "sort should be greater than 0"
                setTimeout(() => { this.errorMessage = "" }, 3000);
                return ;
            }
            if ( !this.data.arrivingArabicName || !this.data.arrivingEnglishName ){
                this.errorMessage = "arabic or english name shouldn't be empty"
                setTimeout(() => { this.errorMessage = "" }, 3000);
                return ;
            }
            this.addNewMethod();
        },
        addNewMethod(){
            api.post('AddOrUpdateArrivingMethod', this.data).then(res => {
                this.$emit("addNewItem")
                this.data.arrivingArabicName = "";
                this.data.arrivingEnglishName = "";
                this.data.sort = 0;
            });
        },
    },
}
</script>

<style></style>
