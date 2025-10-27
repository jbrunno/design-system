<template>
  <ProgressBar v-bind="$attrs" :value="value" :showValue="showValue" :mode="mode" />
</template>

<script setup lang="ts">
import ProgressBar from 'primevue/progressbar'

interface Props {
  value?: number
  showValue?: boolean
  mode?: 'determinate' | 'indeterminate'
}

defineProps<Props>()
</script>
