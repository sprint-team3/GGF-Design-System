import UserMenu from '@/components/header/UserMenu';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'header/UserMenu',
  component: UserMenu,
} satisfies Meta<typeof UserMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    profileImageUrl: '',
    nickname: 'BattleMan',
    email: 'BattleMan@gmail.com',
    accountPath: '',
    mypagePath: '',
    handleCloseUserMenu: () => {},
    handleClickSignout: () => {},
  },
};
