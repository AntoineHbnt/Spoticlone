import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Header } from './header';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    backgrounds: {
      default: 'black',
      values: [
        {
          name: 'black',
          value: '#000',
        },
      ],
    },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Primary = Template.bind({});
