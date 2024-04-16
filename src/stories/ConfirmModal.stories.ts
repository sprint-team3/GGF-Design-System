import { ConfirmModal, ModalButton } from '@/components/modals';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Modals/ConfirmModal',
  component: ConfirmModal,
} satisfies Meta<typeof ConfirmModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Alert_Example: Story = {
  args: {
    openModal: true,
    warning: true,
    state: 'WARNING',
    title: 'title',
    desc: 'description',
    onClose: () => {},
    renderButton: (() => {
      const cancelBtn = ModalButton({ variant: 'warning', children: 'cancel', onClick: () => {} });
      const closeBtn = ModalButton({ children: 'close', onClick: () => {} });
      return [cancelBtn, closeBtn];
    })(),
  },
};

export const Success_Example: Story = {
  args: {
    openModal: true,
    state: 'SUCCESS',
    title: 'title',
    desc: 'description',
    onClose: () => {},
    renderButton: ModalButton({ variant: 'success', children: 'complete', onClick: () => {} }),
  },
};
