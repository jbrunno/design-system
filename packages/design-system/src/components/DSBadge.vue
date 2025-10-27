<template>
  <Badge v-bind="$attrs" :value="value" :severity="severity" :size="size" />
</template>

<script setup lang="ts">
import Badge from 'primevue/badge'

interface Props {
  value?: string | number
  severity?: 'secondary' | 'success' | 'info' | 'warn' | 'danger' | 'contrast'
  size?: 'large' | 'xlarge'
}

defineProps<Props>()
</script>
