import Badge from '@/components/Badge';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Badge/Badge',
  component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    variant: 'default',
    children: 'content',
  },
};
