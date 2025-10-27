<template>
  <Textarea v-bind="$attrs" :modelValue="modelValue" @update:modelValue="$emit('update:modelValue', $event)" :rows="rows" :autoResize="autoResize" />
</template>

<script setup lang="ts">
import Textarea from 'primevue/textarea'

interface Props {
  modelValue?: string
  rows?: number
  autoResize?: boolean
}

defineProps<Props>()
defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>
