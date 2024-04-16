import ReviewCard from '@/components/ReviewCard';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Cards/ReviewCard',
  component: ReviewCard,
} satisfies Meta<typeof ReviewCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    nickname: 'CheeseB',
    rating: 3,
    content: 'ReviewCard Content',
    createdAt: '2024-04-16',
  },
};
