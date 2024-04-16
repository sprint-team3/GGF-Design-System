import StarRating from '@/components/StarRating';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'StarRating/StarRating',
  component: StarRating,
} satisfies Meta<typeof StarRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    size: 'large',
    rating: 4,
    readonly: true,
  },
};
