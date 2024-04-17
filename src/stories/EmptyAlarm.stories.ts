import EmptyAlarm from '@/components/header/EmptyAlarm';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'header/AlarmList/EmptyAlarm',
  component: EmptyAlarm,
} satisfies Meta<typeof EmptyAlarm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    emptyAlarmText: '알림이 없습니다',
  },
};
