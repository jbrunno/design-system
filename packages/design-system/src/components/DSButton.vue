<template>
  <Button v-bind="$attrs" :label="label" :icon="icon" :severity="severity" :size="size">
    <slot />
  </Button>
</template>

<script setup lang="ts">
import Button from 'primevue/button'

interface Props {
  label?: string
  icon?: string
  severity?: 'secondary' | 'success' | 'info' | 'warn' | 'danger' | 'contrast'
  size?: 'small' | 'large'
}

defineProps<Props>()
</script>
