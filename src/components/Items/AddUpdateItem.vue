<template>
<form @submit.prevent="validateForm" class="row gx-4 gy-2 pb-3 mt-3 mx-1 shadow-sm rounded">
    <div class="col-12 col-sm-6 col-xl-3">
    <input
        v-model="data.arrivingArabicName"
        type="text"
        class="form-control"
        placeholder="Arabic Name"
    />
    </div>
    <div class="col-12 col-sm-6 col-xl-3">
    <input
        v-model="data.arrivingEnglishName"
        type="text"
        class="form-control"
        placeholder="English Name"
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
        <button type="submit" class="btn w-100" :class="isUpdate ? 'btn-info' : 'btn-success'">
            {{ isUpdate ? 'update item' : 'Add New Item' }}
        </button>
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
import api from "../../api.js";

export default {
    props: {
        updatedItem: {
            type: Object,
        }
    },
    data(){
        return{
            data :{
                arrivingArabicName: "",
                arrivingEnglishName: "",
                sort: null,
                accountId: 1,
            },
            errorMessage: "",
            isUpdate: false,
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
                this.resetForm();
            });
        },
        resetForm(){
            this.data = {
                arrivingArabicName: "",
                arrivingEnglishName: "",
                sort: 0,
                accountId: 1,
            }
            this.isUpdate = false;
        },
    },
    watch: {
        updatedItem: {
            handler() {
                if ( Object.keys(this.updatedItem).length === 0 ){ // cancel upadte
                    this.resetForm();
                } else { // update item
                    this.isUpdate = true;
                    for (let [key, value] of Object.entries(this.updatedItem)) {
                        this.data[key] = this.updatedItem[key]
                    }
                }
            },
            deep: true,
        }
    },
}
</script>
