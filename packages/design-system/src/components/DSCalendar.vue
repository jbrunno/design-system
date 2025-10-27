<template>
  <DatePicker v-bind="$attrs" :modelValue="modelValue" @update:modelValue="handleUpdate" :showIcon="showIcon" />
</template>

<script setup lang="ts">
import DatePicker from 'primevue/datepicker'

interface Props {
  modelValue?: Date | Date[] | null
  showIcon?: boolean
}

defineProps<Props>()
const emit = defineEmits<{
  'update:modelValue': [value: Date | Date[] | null]
}>()

const handleUpdate = (value: Date | Date[] | (Date | null)[] | null | undefined) => {
  if (value !== undefined) {
    emit('update:modelValue', value as Date | Date[] | null)
  }
}
</script>
