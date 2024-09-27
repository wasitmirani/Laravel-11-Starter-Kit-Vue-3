<script setup lang="ts">
import { defineProps, computed,defineEmits  } from 'vue';

const emit = defineEmits(['update:value'])

import { Helpers } from "../utils/Helper";

const props = defineProps({
  value: {
    type: String,
    required: true
  },
  input_key: {
    type: String,
    required: true
  },
  errors: {
    type: Object,
    default: null
  },
  placeholder: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  inputId: {
    type: String,
    default: ''
  },
  autofocus: {
    type: Boolean,
    default: false
  }
});

const inputValue = computed({
  get() {
    return props.value;
  },
  set(newValue) {
    emit('update:value', newValue);
  }
});
</script>

<template>

      <input
        v-model="inputValue"
        :class="`form-control ${Helpers.appendValidateClass(errors, input_key)}`"
        :placeholder="placeholder"
        :type="type"
        :id="inputId"
        :name="inputId"
        :autofocus="autofocus"
      />
      <label :for="inputId">{{ label }}</label>
      <validate-input :errors="errors" :value="input_key"></validate-input>

  </template>

  