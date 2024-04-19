import Header from '../lib/components/Header';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Header/Header',
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    path: '',
    logoName: 'LOGO',
    menuList: [
      { menu: 'MENU 1', path: 'menu1' },
      { menu: 'MENU 2', path: 'menu2' },
      { menu: 'MENU 3', path: 'menu3' },
      { menu: 'MENU 4', path: 'menu4' },
    ],
    activatedMenu: 0,
    handleActivatedMenu: () => {},
    handleOpenDrawerMenu: () => {},
  },
};
