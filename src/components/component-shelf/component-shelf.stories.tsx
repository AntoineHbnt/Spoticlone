import { ComponentShelf, ComponentShelfProps } from './component-shelf';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/CardList',
  component: ComponentShelf,
} as ComponentMeta<typeof ComponentShelf>;

const Template: ComponentStory<typeof ComponentShelf> = (args: ComponentShelfProps) => (
  <ComponentShelf {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'Mixs populaires',
};
