import type { App } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import ToastService from 'primevue/toastservice'

import './styles/tailwind.css'

export { default as DSButton } from './components/DSButton.vue'
export { default as DSInput } from './components/DSInput.vue'
export { default as DSCard } from './components/DSCard.vue'
export { default as DSDataTable } from './components/DSDataTable.vue'
export { default as DSDialog } from './components/DSDialog.vue'
export { default as DSDropdown } from './components/DSDropdown.vue'
export { default as DSCheckbox } from './components/DSCheckbox.vue'
export { default as DSRadioButton } from './components/DSRadioButton.vue'
export { default as DSTextarea } from './components/DSTextarea.vue'
export { default as DSCalendar } from './components/DSCalendar.vue'
export { default as DSMenu } from './components/DSMenu.vue'
export { default as DSToast } from './components/DSToast.vue'
export { default as DSProgressBar } from './components/DSProgressBar.vue'
export { default as DSBadge } from './components/DSBadge.vue'
export { default as DSChip } from './components/DSChip.vue'
export { default as DSTabView } from './components/DSTabView.vue'
export { default as DSAccordion } from './components/DSAccordion.vue'
export { default as DSPanel } from './components/DSPanel.vue'

export const installDesignSystem = (app: App) => {
  app.use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {
        darkModeSelector: '.dark-mode'
      }
    }
  })
  app.use(ToastService)
}

export default {
  install: installDesignSystem
}
