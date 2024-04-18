import ImageField from '@/components/ImageField';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'inputs/ImageField',
  component: ImageField,
} satisfies Meta<typeof ImageField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    label: 'ImageField',
    modalTitle: 'FILE EXCEEDED',
    modalState: 'ALERT',
    modalDescription: 'YOU CAN UPLOAD UP TO 5 IMAGES',
    modalButtonMessage: 'OK',
    onFilesUpdate: () => {},
  },
};
