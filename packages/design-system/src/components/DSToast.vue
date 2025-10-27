<template>
  <Toast v-bind="$attrs" ref="toastRef" />
</template>

<script setup lang="ts">
import Toast from 'primevue/toast'
import { ref } from 'vue'

const toastRef = ref()

defineExpose({
  add: (message: any) => toastRef.value?.add(message),
  removeGroup: (group: string) => toastRef.value?.removeGroup(group),
  removeAllGroups: () => toastRef.value?.removeAllGroups()
})
</script>
