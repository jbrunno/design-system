import type { Meta, StoryObj } from '@storybook/vue3'
import { DSCard } from '@repo/design-system'

const meta = {
  title: 'Components/DSCard',
  component: DSCard,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' }
  },
  args: {
    title: 'Card Title',
    subtitle: 'Card Subtitle'
  }
} satisfies Meta<typeof DSCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Card Title',
    subtitle: 'Card Subtitle',
  },
  render: (args) => ({
    components: { DSCard },
    setup() {
      return { args }
    },
    template: `
      <DSCard v-bind="args">
        <p>This is the card content. You can put any content here.</p>
      </DSCard>
    `
  })
}

export const WithoutSubtitle: Story = {
  args: {
    title: 'Card Title',
  },
  render: (args) => ({
    components: { DSCard },
    setup() {
      return { args }
    },
    template: `
      <DSCard v-bind="args">
        <p>This card has no subtitle.</p>
      </DSCard>
    `
  })
}

export const SimpleContent: Story = {
  args: {
    title: 'Simple Card',
    subtitle: 'With simple content',
  },
  render: (args) => ({
    components: { DSCard },
    setup() {
      return { args }
    },
    template: `
      <DSCard v-bind="args">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </DSCard>
    `
  })
}
