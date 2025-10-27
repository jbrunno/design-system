<template>
  <Button 
    v-bind="$attrs" 
    :label="label" 
    :icon="icon" 
    :iconPos="iconPos"
    :severity="severity" 
    :size="size"
    :outlined="outlined"
    :text="text"
    :raised="raised"
    :rounded="rounded"
    :loading="loading"
    :disabled="disabled"
  >
    <slot />
  </Button>
</template>

<script setup lang="ts">
import Button from 'primevue/button'

interface Props {
  label?: string
  icon?: string
  iconPos?: 'left' | 'right' | 'top' | 'bottom'
  severity?: 'secondary' | 'success' | 'info' | 'warn' | 'danger' | 'contrast' | 'help'
  size?: 'small' | 'large'
  outlined?: boolean
  text?: boolean
  raised?: boolean
  rounded?: boolean
  loading?: boolean
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  iconPos: 'left',
  outlined: false,
  text: false,
  raised: false,
  rounded: false,
  loading: false,
  disabled: false
})
</script>
