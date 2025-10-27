import type { Meta, StoryObj } from '@storybook/vue3'
import { DSDropdown } from '@repo/design-system'
import { ref } from 'vue'

const meta = {
  title: 'Components/DSDropdown',
  component: DSDropdown,
  tags: ['autodocs'],
  argTypes: {
    options: { control: 'object' },
    optionLabel: { control: 'text' },
    placeholder: { control: 'text' }
  },
  args: {
    placeholder: 'Select an option'
  }
} satisfies Meta<typeof DSDropdown>

export default meta
type Story = StoryObj<typeof meta>

const cities = [
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
]

export const Default: Story = {
  args: {
    options: cities,
    optionLabel: 'name',
    placeholder: 'Select a city'
  },
  render: (args) => ({
    components: { DSDropdown },
    setup() {
      const selectedCity = ref(null)
      return { args, selectedCity }
    },
    template: `
      <DSDropdown v-bind="args" v-model="selectedCity" />
    `
  })
}

export const WithValue: Story = {
  args: {
    options: cities,
    optionLabel: 'name',
    placeholder: 'Select a city'
  },
  render: (args) => ({
    components: { DSDropdown },
    setup() {
      const selectedCity = ref(cities[0])
      return { args, selectedCity }
    },
    template: `
      <DSDropdown v-bind="args" v-model="selectedCity" />
    `
  })
}

export const SimpleOptions: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    placeholder: 'Select an option'
  },
  render: (args) => ({
    components: { DSDropdown },
    setup() {
      const selectedOption = ref(null)
      return { args, selectedOption }
    },
    template: `
      <DSDropdown v-bind="args" v-model="selectedOption" />
    `
  })
}
