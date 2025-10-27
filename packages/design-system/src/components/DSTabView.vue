<template>
  <TabView v-bind="$attrs">
    <slot />
  </TabView>
</template>

<script setup lang="ts">
import TabView from 'primevue/tabview'
</script>
