import AlarmList from '@/components/header/AlarmList';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'header/AlarmList',
  component: AlarmList,
} satisfies Meta<typeof AlarmList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    notifications: [
      {
        id: 0,
        content: '함께하면 즐거운 스트릿 댄스(2024-04-16 15:00~18:00) 예약이 승인되었어요.',
        createdAt: '30분 전',
      },
    ],
    totalCount: 1,
    handleDelete: () => {},
    handleDeleteAll: () => {},
    emptyAlarmText: '알림이 없습니다',
  },
};
