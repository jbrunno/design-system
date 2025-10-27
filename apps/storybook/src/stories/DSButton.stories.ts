import type { Meta, StoryObj } from '@storybook/vue3'
import { DSButton } from '@repo/design-system'

const meta = {
  title: 'Components/DSButton',
  component: DSButton,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    icon: { control: 'text' },
    severity: {
      control: 'select',
      options: ['secondary', 'success', 'info', 'warn', 'danger', 'contrast']
    },
    size: {
      control: 'select',
      options: ['small', 'large']
    }
  },
  args: {
    label: 'Button'
  }
} satisfies Meta<typeof DSButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Primary Button',
  },
}

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    severity: 'secondary',
  },
}

export const Success: Story = {
  args: {
    label: 'Success Button',
    severity: 'success',
  },
}

export const Info: Story = {
  args: {
    label: 'Info Button',
    severity: 'info',
  },
}

export const Warning: Story = {
  args: {
    label: 'Warning Button',
    severity: 'warn',
  },
}

export const Danger: Story = {
  args: {
    label: 'Danger Button',
    severity: 'danger',
  },
}

export const WithIcon: Story = {
  args: {
    label: 'Button with Icon',
    icon: 'pi pi-check',
  },
}

export const Small: Story = {
  args: {
    label: 'Small Button',
    size: 'small',
  },
}

export const Large: Story = {
  args: {
    label: 'Large Button',
    size: 'large',
  },
}
