import DrawerMenu from '@/components/DrawerMenu';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'DrawerMenu/DrawerMenu',
  component: DrawerMenu,
} satisfies Meta<typeof DrawerMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    menuList: [
      { menu: 'LEAGUE OF LEGENDS', path: 'lol' },
      { menu: 'BATTLEGROUNDS', path: 'bg' },
      { menu: 'OVERWATCH 2', path: 'ow' },
      { menu: 'MINECRAFT', path: 'mc' },
    ],
    onClick: () => {},
  },
};
