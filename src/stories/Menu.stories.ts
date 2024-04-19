import Menu from '../lib/components/Menu';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Menu/Menu',
  component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    menuList: [
      { menu: 'MENU 1', path: 'menu1' },
      { menu: 'MENU 2', path: 'menu2' },
      { menu: 'MENU 3', path: 'menu3' },
      { menu: 'MENU 4', path: 'menu4' },
    ],
    activatedMenu: 0,
    handleActivatedMenu: () => {},
  },
};
