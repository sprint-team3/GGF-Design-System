import CommonModal from '@/components/CommonModal';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Modals/CommonModal',
  component: CommonModal,
} satisfies Meta<typeof CommonModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    openModal: true,
    title: 'Modal',
    renderContent: 'Modal Content',
    onClose: () => {},
  },
};
