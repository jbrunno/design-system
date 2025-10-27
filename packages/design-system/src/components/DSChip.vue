<template>
  <Chip v-bind="$attrs" :label="label" :icon="icon" :image="image" :removable="removable" @remove="$emit('remove')" />
</template>

<script setup lang="ts">
import Chip from 'primevue/chip'

interface Props {
  label?: string
  icon?: string
  image?: string
  removable?: boolean
}

defineProps<Props>()
defineEmits<{
  'remove': []
}>()
</script>
