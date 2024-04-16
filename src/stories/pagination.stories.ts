import Pagination from '@/components/Pagination';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Pagination',
  component: Pagination,
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    totalCount: 100,
    pageState: 0,
    postPerPage: 10,
    defaultPageSize: 1000,
    onClick: () => {},
  },
};
