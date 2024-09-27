<template>
    <div class="form-floating form-floating-outline m-3 margin-lf">
      <input
        type="text"
        class="form-control"
        id="floatingInput"
        :placeholder="label"
        aria-describedby="floatingInputHelp"
        v-model="query"
      />
      <label for="floatingInput" class="margin-lf">{{ label }}</label>
      <div id="floatingInputHelp" class="form-text">
        Search characters should be greater than two.
      </div>
    </div>
  </template>

  <script setup lang="ts">
  import { ref, watch, defineProps, onMounted, defineEmits } from 'vue';
  import axios from 'axios';
  import loadsh from 'lodash';

  const props = defineProps<{
    label: string;
    api_url: string;
  }>();

  const emit = defineEmits(['loading', 'filterData', 'query', 'reload']);

  const query = ref<string>('');
  const apiurl = ref<string>(props.api_url ?? ''); // Replace with actual URL

  // Debounced search function
  const searchQuery = loadsh.debounce(() => {
    setTimeout(() => {
      search();
    }, 500);
  }, 500);

  async function search() {
    if (query.value.length > 2) {
      emit('loading', true);
      try {
        const response = await axios.get(`${apiurl.value}?query=${query.value}`);
        emit('loading', false);
        emit('filterData', response.data);
        emit('query', query.value);
      } catch (error) {
        emit('loading', false);
        // Handle error if needed
        console.error(error);
      }
    }
  }

  // Watcher for query changes
  watch(query, (newQuery) => {
    if (newQuery === '') {
      emit('query', '');
      emit('reload');
    } else {
      searchQuery();
    }
  });

  onMounted(() => {
    // Additional setup if needed
  });
  </script>

  <style scoped>
  .margin-lf {
    margin-left: 5px;
  }
  </style>
