<template>
  <InputText v-bind="$attrs" :modelValue="modelValue" @update:modelValue="handleUpdate" :size="size" />
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext'

interface Props {
  modelValue?: string
  size?: 'small' | 'large'
}

defineProps<Props>()
const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const handleUpdate = (value: string | undefined) => {
  if (value !== undefined) {
    emit('update:modelValue', value)
  }
}
</script>
