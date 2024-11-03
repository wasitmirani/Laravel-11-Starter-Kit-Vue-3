<script setup>
import { Helpers } from '../../Utils/helpers';
import UserForm from './UserFormComponent.vue';
</script>

<template>
    <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-6 row-gap-4">
          <div class="d-flex flex-column justify-content-center">
            <h4 class="mb-1">Add a new User</h4>
            <p class="mb-0">Create a new user profile for your store</p>
        </div>
        <div class="d-flex align-content-center flex-wrap gap-4">
            <button class="btn btn-outline-secondary waves-effect" @click="Helpers.navigateTo('users')">Discard</button>
            <button class="btn btn-outline-primary waves-effect">Save draft</button>
            <button type="submit" class="btn btn-primary waves-effect waves-light">Publish User</button>
        </div>
    </div>
    <div class="row">
            <UserForm />
    </div>
</template>
