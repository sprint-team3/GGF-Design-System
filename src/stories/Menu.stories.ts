import Menu from '@/components/header/Menu';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'header/Menu',
  component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    menuList: ['LEAGUE OF LEGENDS', 'BATTLEGROUNDS', 'OVERWATCH 2', 'MINECRAFT'],
    activatedGame: 0,
    handleActivatedGame: () => {},
  },
};
