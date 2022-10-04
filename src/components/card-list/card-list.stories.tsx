import { CardList, CardListProps } from './card-list';

export default {
  title: 'Components/CardList',
  component: CardList,
} as ComponentMeta<typeof CardList>;

const Template: ComponentStory<typeof CardList> = (args: CardListProps) => <CardList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Mixs populaires',
  cards: [
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
