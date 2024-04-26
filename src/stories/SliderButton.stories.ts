import SliderButton from '@/components/SliderButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Buttons/SliderButton',
  component: SliderButton,
} satisfies Meta<typeof SliderButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
