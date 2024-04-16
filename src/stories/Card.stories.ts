import { Card } from '@/components/cards';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Cards/Card',
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    path: '/',
    title: 'Card title',
    rating: 4,
    reviewCount: 67,
    createdAt: '2024-04-16',
    tagContent: 'content',
    tagVariant: 'primary',
  },
};
