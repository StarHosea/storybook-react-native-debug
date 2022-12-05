import {withBackgrounds} from '@storybook/addon-ondevice-backgrounds';

export const decorators = [
  (StoryFn) => {
    return <StoryFn/>
  },
  withBackgrounds,
];

export const parameters = {
  backgrounds: [
    {name: 'plain', value: 'white', default: true},
    {name: 'warm', value: 'hotpink'},
    {name: 'cool', value: 'deepskyblue'},
  ],
};
