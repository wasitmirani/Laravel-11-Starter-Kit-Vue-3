<script setup lang="ts">
import { UserService } from '../../Services/user/UserService';
import { Helpers } from '../../Utils/Helper';
import UserTableComponent from './UserTableComponent.vue';


let users = Helpers.useDynamicReactive([]);

const isloading = Helpers.useDynamicRef(false);

const getUsers = () => {
    isloading.value = true;
    UserService.users().then((res) => {
        // Helpers.NotifyAlert(200,'User Data','success',res.data.message);
    
        console.log("res:", users);
        users = res.data.result.users;
        console.log("users:", users);
    }).catch((err) => {
        Helpers.NotifyAlert(400,'User Data','error',err.response.data.message);
    })
    setTimeout(() => {
        isloading.value  = false;
    }, 1000);
}

function loadingStart(value:any) {
  isloading.value = value;
}
function filterData(data:any) {
    users = data.users;
}
Helpers.useDynamicOnMounted(() => {
    getUsers();
    
});

</script>

<template>
    <div>
        <div class="row g-6 mb-6">
            <h4 class="mb-1">Users List</h4>
            <p class="mb-6">A role provided access to predefined menus and features so that depending on assigned role
                an administrator can have access to what user needs.</p>
        </div>
        <!-- Users List Table -->
        <div class="row mt-4">
            <div class="card">
                <div class="card-header border-bottom">
                    <div class="row">

                        <div class="col-lg-4 col-md-4 col-sm-6">
                               
                            <SearchInput label="Search Users" v-on:loading="loadingStart($event)"
                                v-on:reload="getUsers()" v-on:filterData="filterData($event)" api_url="/category" />
                            <button class="btn btn-primary waves-effect waves-light"
                                @click="Helpers.navigateTo('create-user')">
                                <i class="ri-user-add-fill me-0 me-sm-1 d-inline-block d-sm-none"></i>

                                <span class="d-none d-sm-inline-block"> Add New User </span></button>
                        </div>
                        <div class="col-lg-8 col-md-8 col-sm-6 ">
                            <div class="btn-fr ">
                                <!-- <router-link :to="{ name: 'create-user' }"
                                    class="btn btn-primary waves-effect waves-light">Add User</router-link> -->

                                <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasFilter"
                                    class="btn  btn-icon btn-label-primary btn-ml-5 waves-effect">
                                    <span class="tf-icons ri-filter-2-line "></span>

                                </button>
                                <button  @click="getUsers"  type="button" class="btn btn-icon btn-label-primary waves-effect">
                                    <span class="tf-icons ri-refresh-line"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Users Table -->
                <UserTableComponent :users="users" :isloading="isloading" v-on:user-deleted="getUsers"/>
            </div>
        </div>


        <!-- Offcanvas to add new user -->
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasFilter" aria-labelledby="offcanvasFilterLabel">
            <div class="offcanvas-header">
                <h5 id="offcanvasAddUserLabel" class="offcanvas-title">Filters</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
            </div>
            <div class="offcanvas-body mx-0 flex-grow-0 h-100">

            </div>
        </div>
    </div>

</template>
