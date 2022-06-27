import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {UncontrolledRating} from './UncontrolledRating';

export default {
    title: 'components/UncontrolledRating',
    component: UncontrolledRating,
} as ComponentMeta<typeof UncontrolledRating>;

const Template: ComponentStory<typeof UncontrolledRating> = (args) => <UncontrolledRating />;

export const StdTemplate = Template.bind({});
StdTemplate.args = {
    defaultValue: 0,
};