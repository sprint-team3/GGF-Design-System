import HeaderProfile from '@/components/header/HeaderProfile';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'header/HeaderProfile',
  component: HeaderProfile,
} satisfies Meta<typeof HeaderProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    nickname: 'BattleMan',
    profileImageUrl: '',
    isActivated: false,
    onClick: () => {},
  },
};
