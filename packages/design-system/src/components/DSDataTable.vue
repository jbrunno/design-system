<template>
  <DataTable v-bind="$attrs" :value="value" :paginator="paginator" :rows="rows">
    <slot />
  </DataTable>
</template>

<script setup lang="ts">
import DataTable from 'primevue/datatable'

interface Props {
  value: any[]
  paginator?: boolean
  rows?: number
}

defineProps<Props>()
</script>
