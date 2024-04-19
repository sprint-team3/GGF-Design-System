import ReviewCard from '../lib/components/ReviewCard';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Cards/ReviewCard',
  component: ReviewCard,
} satisfies Meta<typeof ReviewCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    nickname: 'Nickname',
    rating: 4,
    content: 'ReviewCard Content',
    createdAt: 'YYYY-MM-DD',
  },
};
