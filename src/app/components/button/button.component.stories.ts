import { ButtonComponent } from './button.component';
import { Meta, StoryObj } from '@storybook/angular';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const success: Story = {
  args: {
    label: 'Yappy',
    type: 'success',
    border: false,
  },
};

export const primary: Story = {
  args: {
    ...success.args,
    type: 'primary',
    border: true,
  },
};

export const warning: Story = {
  args: {
    ...success.args,
    type: 'warning',
    border: true,
  },
};
