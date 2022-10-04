import { Card, CardProps } from './card';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args: CardProps) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Mix Valdimir Cauchemar',
  description: 'Lefa, PLK, JeanJass et bien plus',
};
