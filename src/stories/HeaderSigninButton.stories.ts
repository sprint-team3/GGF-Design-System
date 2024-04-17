import { HeaderSigninButton } from '@/components/header/buttons';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'header/buttons/HeaderSigninButton',
  component: HeaderSigninButton,
} satisfies Meta<typeof HeaderSigninButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    path: '',
  },
};
