import Filter from '@/components/Filter';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Tab&Filter/Filter',
  component: Filter,
} satisfies Meta<typeof Filter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    items: [
      { id: '0', text: 'filter1' },
      { id: '1', text: 'filter2' },
      { id: '2', text: 'filter3' },
      { id: '3', text: 'filter4' },
      { id: '4', text: 'filter5' },
    ],
    selectedFilterId: '0',
  },
};
