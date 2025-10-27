import type { Meta, StoryObj } from '@storybook/vue3'
import { DSDataTable } from '@repo/design-system'
import { h } from 'vue'

const meta = {
  title: 'Components/DSDataTable',
  component: DSDataTable,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'object' },
    paginator: { control: 'boolean' },
    rows: { control: 'number' }
  }
} satisfies Meta<typeof DSDataTable>

export default meta
type Story = StoryObj<typeof meta>

const sampleData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
  { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'Manager' },
  { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'User' },
]

export const Default: Story = {
  args: {
    value: sampleData,
  },
  render: (args) => ({
    components: { DSDataTable },
    setup() {
      return { args }
    },
    template: `
      <DSDataTable v-bind="args">
        <Column field="id" header="ID"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="email" header="Email"></Column>
        <Column field="role" header="Role"></Column>
      </DSDataTable>
    `
  })
}

export const WithPagination: Story = {
  args: {
    value: sampleData,
    paginator: true,
    rows: 3,
  },
  render: (args) => ({
    components: { DSDataTable },
    setup() {
      return { args }
    },
    template: `
      <DSDataTable v-bind="args">
        <Column field="id" header="ID"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="email" header="Email"></Column>
        <Column field="role" header="Role"></Column>
      </DSDataTable>
    `
  })
}
