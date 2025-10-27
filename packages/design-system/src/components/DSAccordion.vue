<template>
  <Accordion v-bind="$attrs">
    <slot />
  </Accordion>
</template>

<script setup lang="ts">
import Accordion from 'primevue/accordion'
</script>
