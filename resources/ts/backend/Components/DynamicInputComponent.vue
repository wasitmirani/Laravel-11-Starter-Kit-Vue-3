<!-- DynamicInput.vue -->
<template>
  <div class="form-floating form-floating-outline">
    <input
      class="form-control"
      :type="type"
      :id="name"
      :name="name"
      :placeholder="placeholder"
      :value="modelValue"
      @input="updateValue"
      :class="{ 'is-invalid': hasError }"
      :autofocus="autofocus"
    />
    <label :for="name">{{ label }}</label>
  </div>
  <div v-if="hasError" class="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
    <validate-input :errors="errors?.errors" :value="name" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'DynamicInput',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const hasError = computed(() => props.errors?.errors?.[props.name]?.length > 0);
  console.log("hasError",hasError);
  console.log("errors",props.errors.errors);

    const updateValue = (event: Event) => {
      const target = event.target as HTMLInputElement;
      emit('update:modelValue', target.value);
    };

    return {
      hasError,
      updateValue,
    };
  },
});
</script>

<style scoped>
.is-invalid {
  border-color: red;
}
</style>
