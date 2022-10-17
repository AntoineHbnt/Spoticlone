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
  data: [
    {
      title: 'Mix Valdimir Cauchemar',
      description: 'Lefa, PLK, JeanJass et bien plus',
      thumbnail: {
        src: 'https://seed-mix-image.spotifycdn.com/v6/img/artist/2V5xArcB3BGAHmwsK46tyU/fr/default',
        alt: 'Valdimir Cauchemar',
      },
    },
    {
      title: 'Mix Valdimir Cauchemar',
      description: 'Lefa, PLK, JeanJass et bien plus',
      thumbnail: {
        src: 'https://seed-mix-image.spotifycdn.com/v6/img/artist/2V5xArcB3BGAHmwsK46tyU/fr/default',
        alt: 'Valdimir Cauchemar',
      },
    },
    {
      title: 'Mix Valdimir Cauchemar',
      description: 'Lefa, PLK, JeanJass et bien plus',
      thumbnail: {
        src: 'https://seed-mix-image.spotifycdn.com/v6/img/artist/2V5xArcB3BGAHmwsK46tyU/fr/default',
        alt: 'Valdimir Cauchemar',
      },
    },
    {
      title: 'Mix Valdimir Cauchemar',
      description: 'Lefa, PLK, JeanJass et bien plus',
      thumbnail: {
        src: 'https://seed-mix-image.spotifycdn.com/v6/img/artist/2V5xArcB3BGAHmwsK46tyU/fr/default',
        alt: 'Valdimir Cauchemar',
      },
    },
    {
      title: 'Mix Valdimir Cauchemar',
      description: 'Lefa, PLK, JeanJass et bien plus',
      thumbnail: {
        src: 'https://seed-mix-image.spotifycdn.com/v6/img/artist/2V5xArcB3BGAHmwsK46tyU/fr/default',
        alt: 'Valdimir Cauchemar',
      },
    },
    {
      title: 'Mix Valdimir Cauchemar',
      description: 'Lefa, PLK, JeanJass et bien plus',
      thumbnail: {
        src: 'https://seed-mix-image.spotifycdn.com/v6/img/artist/2V5xArcB3BGAHmwsK46tyU/fr/default',
        alt: 'Valdimir Cauchemar',
      },
    },
  ],
};
