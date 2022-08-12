import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Clock from './Clock';

export default {
    title: 'Components/Clock',
    component: Clock,
    args: {
        clockType: 'analog',
    }

} as ComponentMeta<typeof Clock>;

const Template: ComponentStory<typeof Clock> = (args) => <Clock {...args} />;

export const changeClockType = Template.bind({});
