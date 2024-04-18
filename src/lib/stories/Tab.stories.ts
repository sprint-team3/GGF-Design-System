import Tab from '@/components/Tab';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Tab&Filter/Tab',
  component: Tab,
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Medium_Example: Story = {
  args: {
    items: [
      { id: 'total', text: 'tab1' },
      { id: 'myPost', text: 'tab2' },
      { id: 'myReservation', text: 'tab3' },
    ],
    size: 'medium',
    selectedTabId: 'total',
  },
};

export const Small_Example: Story = {
  args: {
    items: [
      { id: 'pending', text: 'tab1', count: 0 },
      { id: 'accept', text: 'tab2', count: 10 },
      { id: 'deny', text: 'tab3', count: 20 },
    ],
    size: 'small',
    selectedTabId: 'pending',
  },
};
