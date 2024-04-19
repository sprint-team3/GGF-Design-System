import UserMenu from '../lib/components/UserMenu';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'UserMenu/UserMenu',
  component: UserMenu,
} satisfies Meta<typeof UserMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    profileImageUrl: '',
    nickname: 'username',
    email: 'user@email.com',
    mypageText: 'My Page',
    logoutText: 'Logout',
    accountPath: '',
    mypagePath: '',
    handleCloseUserMenu: () => {},
    handleClickSignout: () => {},
  },
};
