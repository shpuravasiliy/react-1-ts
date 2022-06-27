import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {UncontrolledAccordion} from './UncontrolledAccordion';

export default {
    title: 'components/UncontrolledAccordion',
    component: UncontrolledAccordion,
} as ComponentMeta<typeof UncontrolledAccordion>;

const Template: ComponentStory<typeof UncontrolledAccordion> = (args) => <UncontrolledAccordion {...args} />;

export const StdTemplate = Template.bind({});
StdTemplate.args = {
    titleValue: 'Menu',
};