import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {UncontrolledOnOff} from './UncontrolledOnOff';

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
} as ComponentMeta<typeof UncontrolledOnOff>;

const Template: ComponentStory<typeof UncontrolledOnOff> = (args) => <UncontrolledOnOff {...args} />;

export const StdTemplate = Template.bind({});
StdTemplate.args = {
    defaultOn: true,
};