<template>
  <Dialog v-bind="$attrs" :visible="visible" @update:visible="$emit('update:visible', $event)" :header="header" :modal="modal">
    <slot />
    <template #footer v-if="$slots.footer">
      <slot name="footer" />
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import Dialog from 'primevue/dialog'

interface Props {
  visible: boolean
  header?: string
  modal?: boolean
}

defineProps<Props>()
defineEmits<{
  'update:visible': [value: boolean]
}>()
</script>
