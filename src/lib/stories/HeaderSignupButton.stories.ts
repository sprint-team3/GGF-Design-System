import { HeaderSignupButton } from '@/components/buttons';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'buttons/HeaderSignupButton',
  component: HeaderSignupButton,
} satisfies Meta<typeof HeaderSignupButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    text: 'SIGNUP',
    path: '',
  },
};
