<template>
  <Menu v-bind="$attrs" :model="model" :popup="popup" ref="menuRef" />
</template>

<script setup lang="ts">
import Menu from 'primevue/menu'
import { ref } from 'vue'

interface Props {
  model: any[]
  popup?: boolean
}

defineProps<Props>()

const menuRef = ref()

defineExpose({
  toggle: (event: Event) => menuRef.value?.toggle(event),
  show: (event: Event) => menuRef.value?.show(event),
  hide: () => menuRef.value?.hide()
})
</script>
