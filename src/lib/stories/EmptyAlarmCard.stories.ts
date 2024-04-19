import EmptyAlarmCard from '@/components/EmptyAlarmCard';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Cards/EmptyAlarmCard',
  component: EmptyAlarmCard,
} satisfies Meta<typeof EmptyAlarmCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    emptyAlarmText: 'There is no alarm',
  },
};
