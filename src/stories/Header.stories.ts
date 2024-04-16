import Header from '@/components/header/Header';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'header/Header',
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    path: '',
    logoName: 'GGF',
    menuList: ['LEAGUE OF LEGENDS', 'BATTLEGROUNDS', 'OVERWATCH 2', 'MINECRAFT'],
    activatedGame: 0,
    handleActivatedGame: () => {},
    handleOpenDrawerMenu: () => {},
  },
};
