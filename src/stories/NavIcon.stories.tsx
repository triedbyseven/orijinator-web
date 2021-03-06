// NavIcon.stories.tsx

import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { NavIcon } from './NavIcon';

//๐ This default export determines where your story goes in the story list
export default {
    title: 'Icons/NavIcon',
    component: NavIcon,
};

//๐ We create a โtemplateโ of how args map to rendering
const Template: Story<ComponentProps<typeof NavIcon>> = () => <NavIcon />;

export const FirstStory = Template.bind({});
FirstStory.args = {
    /*๐ The args you need here will depend on your component */
};