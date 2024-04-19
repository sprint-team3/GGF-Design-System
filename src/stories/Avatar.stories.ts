import Avatar from '../lib/components/Avatar';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Avatar/Avatar',
  component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    profileImageUrl: null,
    size: 'medium',
    isActivated: false,
  },
};
