<template>
  <Card v-bind="$attrs">
    <template #header v-if="$slots.header">
      <slot name="header" />
    </template>
    <template #title v-if="title">
      {{ title }}
    </template>
    <template #subtitle v-if="subtitle">
      {{ subtitle }}
    </template>
    <template #content>
      <slot />
    </template>
    <template #footer v-if="$slots.footer">
      <slot name="footer" />
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card'

interface Props {
  title?: string
  subtitle?: string
}

defineProps<Props>()
</script>
