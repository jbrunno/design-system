<template>
  <Dropdown 
    v-bind="$attrs" 
    :modelValue="modelValue" 
    @update:modelValue="$emit('update:modelValue', $event)"
    :options="options"
    :optionLabel="optionLabel"
    :placeholder="placeholder"
  />
</template>

<script setup lang="ts">
import Dropdown from 'primevue/dropdown'

interface Props {
  modelValue?: any
  options: any[]
  optionLabel?: string
  placeholder?: string
}

defineProps<Props>()
defineEmits<{
  'update:modelValue': [value: any]
}>()
</script>
