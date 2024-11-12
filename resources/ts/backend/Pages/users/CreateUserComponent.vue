<script setup lang="ts">
import { ref } from 'vue';
import { Helpers } from '../../Utils/Helper';
import UserForm from './UserFormComponent.vue';

const draftStatus = ref<string | null>(null);

const saveDraftHandler = (status?: string) => {
    draftStatus.value = status || 'no status provided';
    console.log(`Save draft with status: ${draftStatus.value}`);
};

// Emit from UserForm and handle it here
const handleSubmitForm = (formData: any) => {
    console.log('Form submitted with data:', formData);
    saveDraftHandler('submitted');
};
</script>

<template>
   
    <div class="row">
        <UserForm :saveDraftHandler="saveDraftHandler" />

    </div>
</template>
