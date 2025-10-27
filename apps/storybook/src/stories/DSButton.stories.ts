import type { Meta, StoryObj } from '@storybook/vue3'
import { DSButton } from '@repo/design-system'

const meta = {
  title: 'Components/DSButton',
  component: DSButton,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    icon: { control: 'text' },
    iconPos: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom']
    },
    severity: {
      control: 'select',
      options: ['secondary', 'success', 'info', 'warn', 'danger', 'contrast', 'help']
    },
    size: {
      control: 'select',
      options: ['small', 'large']
    },
    outlined: { control: 'boolean' },
    text: { control: 'boolean' },
    raised: { control: 'boolean' },
    rounded: { control: 'boolean' },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' }
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

export const Danger: Story = {
  args: {
    label: 'Danger Button',
    severity: 'danger',
  },
}

export const PrimaryOutlined: Story = {
  args: {
    label: 'Primary Outlined',
    outlined: true,
  },
}

export const SecondaryOutlined: Story = {
  args: {
    label: 'Secondary Outlined',
    severity: 'secondary',
    outlined: true,
  },
}

export const SuccessOutlined: Story = {
  args: {
    label: 'Success Outlined',
    severity: 'success',
    outlined: true,
  },
}

export const DangerOutlined: Story = {
  args: {
    label: 'Danger Outlined',
    severity: 'danger',
    outlined: true,
  },
}

export const PrimaryText: Story = {
  args: {
    label: 'Primary Text',
    text: true,
  },
}

export const SecondaryText: Story = {
  args: {
    label: 'Secondary Text',
    severity: 'secondary',
    text: true,
  },
}

export const SuccessText: Story = {
  args: {
    label: 'Success Text',
    severity: 'success',
    text: true,
  },
}

export const DangerText: Story = {
  args: {
    label: 'Danger Text',
    severity: 'danger',
    text: true,
  },
}

export const SmallButton: Story = {
  args: {
    label: 'Small Button',
    size: 'small',
  },
}

export const SmallSecondary: Story = {
  args: {
    label: 'Small Secondary',
    severity: 'secondary',
    size: 'small',
  },
}

export const SmallSuccess: Story = {
  args: {
    label: 'Small Success',
    severity: 'success',
    size: 'small',
  },
}

export const SmallDanger: Story = {
  args: {
    label: 'Small Danger',
    severity: 'danger',
    size: 'small',
  },
}

export const LargeButton: Story = {
  args: {
    label: 'Large Button',
    size: 'large',
  },
}

export const LargeSecondary: Story = {
  args: {
    label: 'Large Secondary',
    severity: 'secondary',
    size: 'large',
  },
}

export const LargeSuccess: Story = {
  args: {
    label: 'Large Success',
    severity: 'success',
    size: 'large',
  },
}

export const LargeDanger: Story = {
  args: {
    label: 'Large Danger',
    severity: 'danger',
    size: 'large',
  },
}

export const IconLeft: Story = {
  args: {
    label: 'Button',
    icon: 'pi pi-check',
    iconPos: 'left',
  },
}

export const IconRight: Story = {
  args: {
    label: 'Button',
    icon: 'pi pi-check',
    iconPos: 'right',
  },
}

export const IconOnly: Story = {
  args: {
    icon: 'pi pi-check',
  },
}

export const IconOnlySmall: Story = {
  args: {
    icon: 'pi pi-check',
    size: 'small',
  },
}

export const IconOnlyLarge: Story = {
  args: {
    icon: 'pi pi-check',
    size: 'large',
  },
}

export const IconLeftSuccess: Story = {
  args: {
    label: 'Success',
    icon: 'pi pi-check',
    severity: 'success',
    iconPos: 'left',
  },
}

export const IconLeftDanger: Story = {
  args: {
    label: 'Danger',
    icon: 'pi pi-check',
    severity: 'danger',
    iconPos: 'left',
  },
}

export const IconOnlySuccess: Story = {
  args: {
    icon: 'pi pi-check',
    severity: 'success',
  },
}

export const IconOnlyDanger: Story = {
  args: {
    icon: 'pi pi-check',
    severity: 'danger',
  },
}

export const IconOnlySecondary: Story = {
  args: {
    icon: 'pi pi-check',
    severity: 'secondary',
  },
}

export const IconLeftOutlined: Story = {
  args: {
    label: 'Outlined',
    icon: 'pi pi-check',
    outlined: true,
  },
}

export const IconOnlyOutlined: Story = {
  args: {
    icon: 'pi pi-check',
    outlined: true,
  },
}

export const IconOnlyOutlinedSuccess: Story = {
  args: {
    icon: 'pi pi-check',
    severity: 'success',
    outlined: true,
  },
}

export const IconOnlyOutlinedDanger: Story = {
  args: {
    icon: 'pi pi-check',
    severity: 'danger',
    outlined: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    disabled: true,
  },
}

export const DisabledSecondary: Story = {
  args: {
    label: 'Disabled Secondary',
    severity: 'secondary',
    disabled: true,
  },
}

export const DisabledSuccess: Story = {
  args: {
    label: 'Disabled Success',
    severity: 'success',
    disabled: true,
  },
}

export const DisabledDanger: Story = {
  args: {
    label: 'Disabled Danger',
    severity: 'danger',
    disabled: true,
  },
}

export const DisabledOutlined: Story = {
  args: {
    label: 'Disabled Outlined',
    outlined: true,
    disabled: true,
  },
}

export const DisabledWithIcon: Story = {
  args: {
    label: 'Disabled',
    icon: 'pi pi-check',
    disabled: true,
  },
}

export const DisabledIconOnly: Story = {
  args: {
    icon: 'pi pi-check',
    disabled: true,
  },
}

export const Loading: Story = {
  args: {
    label: 'Loading Button',
    loading: true,
  },
}

export const LoadingSecondary: Story = {
  args: {
    label: 'Loading Secondary',
    severity: 'secondary',
    loading: true,
  },
}

export const LoadingSuccess: Story = {
  args: {
    label: 'Loading Success',
    severity: 'success',
    loading: true,
  },
}

export const LoadingIconOnly: Story = {
  args: {
    icon: 'pi pi-check',
    loading: true,
  },
}

export const Raised: Story = {
  args: {
    label: 'Raised Button',
    raised: true,
  },
}

export const RaisedSecondary: Story = {
  args: {
    label: 'Raised Secondary',
    severity: 'secondary',
    raised: true,
  },
}

export const RaisedSuccess: Story = {
  args: {
    label: 'Raised Success',
    severity: 'success',
    raised: true,
  },
}

export const Rounded: Story = {
  args: {
    label: 'Rounded Button',
    rounded: true,
  },
}

export const RoundedIconOnly: Story = {
  args: {
    icon: 'pi pi-check',
    rounded: true,
  },
}

export const RoundedIconOnlySuccess: Story = {
  args: {
    icon: 'pi pi-check',
    severity: 'success',
    rounded: true,
  },
}

export const RoundedIconOnlyDanger: Story = {
  args: {
    icon: 'pi pi-check',
    severity: 'danger',
    rounded: true,
  },
}

export const SmallOutlinedIconLeft: Story = {
  args: {
    label: 'Small',
    icon: 'pi pi-check',
    size: 'small',
    outlined: true,
  },
}

export const SmallOutlinedIconOnly: Story = {
  args: {
    icon: 'pi pi-check',
    size: 'small',
    outlined: true,
  },
}

export const SmallOutlinedIconOnlySuccess: Story = {
  args: {
    icon: 'pi pi-check',
    severity: 'success',
    size: 'small',
    outlined: true,
  },
}

export const SmallOutlinedIconOnlyDanger: Story = {
  args: {
    icon: 'pi pi-check',
    severity: 'danger',
    size: 'small',
    outlined: true,
  },
}

export const LargeOutlinedIconLeft: Story = {
  args: {
    label: 'Large',
    icon: 'pi pi-check',
    size: 'large',
    outlined: true,
  },
}

export const LargeOutlinedIconOnly: Story = {
  args: {
    icon: 'pi pi-check',
    size: 'large',
    outlined: true,
  },
}

export const LargeOutlinedIconOnlySuccess: Story = {
  args: {
    icon: 'pi pi-check',
    severity: 'success',
    size: 'large',
    outlined: true,
  },
}

export const LargeOutlinedIconOnlyDanger: Story = {
  args: {
    icon: 'pi pi-check',
    severity: 'danger',
    size: 'large',
    outlined: true,
  },
}
