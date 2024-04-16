import Alarm from '@/components/header/Alarm';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'header/Alarm',
  component: Alarm,
} satisfies Meta<typeof Alarm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    isAlarmExisted: false,
    isActivated: false,
    onClick: () => {},
  },
};
