import type { Meta, StoryObj } from '@storybook/vue3'
import { DSInput } from '@repo/design-system'

const meta = {
  title: 'Components/DSInput',
  component: DSInput,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'text' },
    size: {
      control: 'select',
      options: ['small', 'large']
    },
    placeholder: { control: 'text' }
  },
  args: {
    placeholder: 'Enter text...'
  }
} satisfies Meta<typeof DSInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
}

export const WithValue: Story = {
  args: {
    modelValue: 'Sample text',
    placeholder: 'Enter text...',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    placeholder: 'Small input...',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    placeholder: 'Large input...',
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input...',
    disabled: true,
  },
}
