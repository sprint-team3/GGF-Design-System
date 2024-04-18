import StarRating from '@/components/StarRating';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'StarRating/StarRating',
  component: StarRating,
} satisfies Meta<typeof StarRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Star_Large: Story = {
  args: {
    size: 'large',
    rating: 4,
    readonly: true,
  },
};

export const Star_Medium: Story = {
  args: {
    size: 'medium',
    rating: 4,
    readonly: true,
  },
};

export const Star_Small: Story = {
  args: {
    size: 'small',
    rating: 4,
    readonly: true,
  },
};
