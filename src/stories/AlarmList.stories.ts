import AlarmList from '@/components/AlarmList';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'AlarmList/AlarmList',
  component: AlarmList,
} satisfies Meta<typeof AlarmList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    alarmText: 'Alarm',
    deleteAllText: 'Delete All',
    notifications: [
      {
        id: 0,
        content: 'messag ',
        createdAt: '1 hour age',
      },
    ],
    totalCount: 1,
    handleDelete: () => {},
    handleDeleteAll: () => {},
    emptyAlarmText: '알림이 없습니다',
  },
};
