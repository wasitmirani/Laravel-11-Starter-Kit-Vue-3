<script setup lang="ts">
const props = defineProps(['active_name', 'links'])

</script>
<template>
    <div class="row">
        <div class="col-12">
            <h4 class="py-3 mb-1">
                {{ props.active_name }}
            </h4>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb breadcrumb-style1">
                    <li class="breadcrumb-item">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li class="breadcrumb-item" v-for="link in props.links" :key="link.id">
                        <router-link :to="{ name: link.route }">{{ link.name }}</router-link>
                    </li>
                    <li class="breadcrumb-item active">{{ props.active_name }}</li>
                </ol>
            </nav>
        </div>
    </div>
</template>

<style></style>
