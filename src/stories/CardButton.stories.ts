import CardButton from '@/components/CardButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Buttons/CardButton',
  component: CardButton,
} satisfies Meta<typeof CardButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: 'text',
  },
};
