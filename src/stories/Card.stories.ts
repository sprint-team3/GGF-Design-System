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
    title: 'Title',
    rating: 4,
    reviewCount: 100,
    createdAt: 'YYYY-MM-DD',
    tagContent: 'content',
    tagVariant: 'primary',
  },
};
