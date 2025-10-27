import type { Meta, StoryObj } from '@storybook/vue3'
import { DSDialog, DSButton } from '@repo/design-system'
import { ref } from 'vue'

const meta = {
  title: 'Components/DSDialog',
  component: DSDialog,
  tags: ['autodocs'],
  argTypes: {
    visible: { control: 'boolean' },
    header: { control: 'text' },
    modal: { control: 'boolean' }
  },
  args: {
    header: 'Dialog Header',
    modal: true
  }
} satisfies Meta<typeof DSDialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { DSDialog, DSButton },
    setup() {
      const visible = ref(false)
      return { args, visible }
    },
    template: `
      <div>
        <DSButton label="Show Dialog" @click="visible = true" />
        <DSDialog v-bind="args" v-model:visible="visible">
          <p>This is the dialog content. You can put any content here.</p>
        </DSDialog>
      </div>
    `
  })
}

export const WithFooter: Story = {
  render: (args) => ({
    components: { DSDialog, DSButton },
    setup() {
      const visible = ref(false)
      return { args, visible }
    },
    template: `
      <div>
        <DSButton label="Show Dialog" @click="visible = true" />
        <DSDialog v-bind="args" v-model:visible="visible">
          <p>This dialog has a custom footer with action buttons.</p>
          <template #footer>
            <DSButton label="Cancel" severity="secondary" @click="visible = false" />
            <DSButton label="Save" @click="visible = false" />
          </template>
        </DSDialog>
      </div>
    `
  })
}
