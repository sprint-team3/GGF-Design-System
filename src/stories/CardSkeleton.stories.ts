import CardSkeleton from '../lib/components/CardSkeleton';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Cards/CardSkeleton',
  component: CardSkeleton,
} satisfies Meta<typeof CardSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
