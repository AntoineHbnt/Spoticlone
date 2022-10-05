import '../src/index.scss';
import 'remixicon/fonts/remixicon.css';
import { withDecorator } from './decorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#121212',
      },
    ],
  },
};

export const decorators = [withDecorator];
