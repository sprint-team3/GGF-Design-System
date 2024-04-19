import ConfirmModal from '../lib/components/ConfirmModal';
import ModalButton from '../lib/components/ModalButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Modals/ConfirmModal',
  component: ConfirmModal,
} satisfies Meta<typeof ConfirmModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Warning_Modal: Story = {
  args: {
    openModal: true,
    warning: true,
    state: 'WARNING',
    title: 'Title',
    description: 'Description',
    onClose: () => {},
    renderButton: (() => {
      const cancelBtn = ModalButton({ variant: 'warning', children: 'Cancel', onClick: () => {} });
      const closeBtn = ModalButton({ children: 'Close', onClick: () => {} });
      return [cancelBtn, closeBtn];
    })(),
  },
};

export const Success_Modal: Story = {
  args: {
    openModal: true,
    state: 'SUCCESS',
    title: 'Title',
    description: 'Description',
    onClose: () => {},
    renderButton: ModalButton({ variant: 'success', children: 'Complete', onClick: () => {} }),
  },
};
