<template>
  <Panel v-bind="$attrs" :header="header" :toggleable="toggleable" :collapsed="collapsed">
    <slot />
  </Panel>
</template>

<script setup lang="ts">
import Panel from 'primevue/panel'

interface Props {
  header?: string
  toggleable?: boolean
  collapsed?: boolean
}

defineProps<Props>()
</script>
