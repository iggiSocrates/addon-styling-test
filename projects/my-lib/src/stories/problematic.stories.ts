import { Meta, StoryObj } from '@storybook/angular';
import { ProblematicComponent } from '../lib/components/problematic/problematic.component';

const meta: Meta<ProblematicComponent> = {
  title: 'problematic-component',
  component: ProblematicComponent,
};

export default meta;
type Story = StoryObj<ProblematicComponent>;

export const Default: Story = {
  args: {},
};
