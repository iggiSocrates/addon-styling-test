import { Meta, StoryObj } from '@storybook/angular';
import { OkComponent } from '../lib/components/ok/ok.component';

const meta: Meta<OkComponent> = {
  title: 'ok-component',
  component: OkComponent,
};

export default meta;
type Story = StoryObj<OkComponent>;

export const Default: Story = {
  args: {},
};
