<template>
  <RadioButton v-bind="$attrs" :modelValue="modelValue" @update:modelValue="$emit('update:modelValue', $event)" :value="value" />
</template>

<script setup lang="ts">
import RadioButton from 'primevue/radiobutton'

interface Props {
  modelValue?: any
  value: any
}

defineProps<Props>()
defineEmits<{
  'update:modelValue': [value: any]
}>()
</script>
