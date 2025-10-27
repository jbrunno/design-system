<template>
  <Checkbox v-bind="$attrs" :modelValue="modelValue" @update:modelValue="$emit('update:modelValue', $event)" :binary="binary" />
</template>

<script setup lang="ts">
import Checkbox from 'primevue/checkbox'

interface Props {
  modelValue?: boolean | any
  binary?: boolean
}

defineProps<Props>()
defineEmits<{
  'update:modelValue': [value: boolean | any]
}>()
</script>
