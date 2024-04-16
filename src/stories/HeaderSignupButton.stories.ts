import { HeaderSignupButton } from '@/components/header/buttons';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'header/buttons/HeaderSignupButton',
  component: HeaderSignupButton,
} satisfies Meta<typeof HeaderSignupButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    path: '',
  },
};
