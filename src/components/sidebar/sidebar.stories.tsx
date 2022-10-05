import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IconSVG } from '../icon/icon';
import { NavbarProps, Sidebar } from './sidebar';

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
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
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args: NavbarProps) => (
  <div className="h-screen w-full">
    <Sidebar {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  navigation: [
    {
      icon: IconSVG.LibraryEmpty,
      label: 'Your Library',
      path: '/collection/playlists',
      activeIcon: IconSVG.LibraryFulfilled,
    },
    {
      icon: IconSVG.CreatePlaylistIcon,
      label: 'Create Playlist',
      path: '/collection/playlist/:id',
    },
    {
      icon: IconSVG.LikedSongIcon,
      label: 'Liked Songs',
      path: '/collection/tracks',
    },
    {
      icon: IconSVG.YourEpisodesIcon,
      label: 'Your Episodes',
      path: '/collection/episodes',
    },
  ],
};
