import { AlarmCard } from '@/components/cards';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Cards/AlarmCard',
  component: AlarmCard,
} satisfies Meta<typeof AlarmCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    id: 0,
    content: 'message',
    createdAt: '1 hour ago',
    onClick: () => {},
  },
};
