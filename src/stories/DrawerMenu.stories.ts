import DrawerMenu from '@/components/header/DrawerMenu';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'header/DrawerMenu',
  component: DrawerMenu,
} satisfies Meta<typeof DrawerMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    menuList: ['LEAGUE OF LEGENDS', 'BATTLEGROUNDS', 'OVERWATCH 2', 'MINECRAFT'],
    onClick: () => {},
  },
};
