import HeaderProfile from '@/components/HeaderProfile';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'HeaderProfile/HeaderProfile',
  component: HeaderProfile,
} satisfies Meta<typeof HeaderProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    nickname: 'UserName',
    profileImageUrl: '',
    isActivated: false,
    onClick: () => {},
  },
};
