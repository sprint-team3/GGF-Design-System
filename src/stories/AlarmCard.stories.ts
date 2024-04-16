import AlarmCard from '@/components/header/AlarmCard';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'header/AlarmList/AlarmCard',
  component: AlarmCard,
} satisfies Meta<typeof AlarmCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    id: 0,
    content: '함께하면 즐거운 스트릿 댄스(2024-04-16 15:00~18:00) 예약이 승인되었어요.',
    createdAt: '30분 전',
    onClick: () => {},
  },
};
