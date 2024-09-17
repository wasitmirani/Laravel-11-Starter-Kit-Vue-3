<script setup>
const props = defineProps(['customclass', 'name','label'])

</script>

<template>
    <div>
        <button type="button" :class="`nav-link waves-effect waves-light ${customclass}`" role="tab" data-bs-toggle="tab"
                  :data-bs-target="`#navs-pills-justified-${name}`"
                  :aria-controls="`navs-pills-justified-${name}`"
                  aria-selected="true">
                  <i class="tf-icons ri-user-settings-line me-2"></i>
                   {{ label }}
                  <!-- <span class="badge rounded-pill badge-center h-px-20 w-px-20 bg-danger ms-2 pt-50">{{auth_user?.name}}</span> -->
                </button>
    </div>
</template>

<style>

</style>
