import { CountButton } from '@/components/buttons';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Buttons/CountButton',
  component: CountButton,
} satisfies Meta<typeof CountButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    label: 'label',
    isDisabled: false,
  },
};
