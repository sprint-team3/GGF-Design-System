import Tag from '../lib/components/Tag';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Tag/Tag',
  component: Tag,
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    variant: 'default',
    children: 'content',
  },
};
