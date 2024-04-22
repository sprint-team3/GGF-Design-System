import IconButton from '@/components/IconButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'buttons/IconButton',
  component: IconButton,
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    imageUrl: '',
    imageAlt: '',
    isActivated: false,
    onClick: () => {},
    size: 'small',
  },
};
