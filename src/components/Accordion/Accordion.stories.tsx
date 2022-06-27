
import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Accordion} from './Accordion';

export default {
    title: 'Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

const callBack = action('Accordion mode changed');

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const CollapsedMode = Template.bind({});
CollapsedMode.args = {
    titleValue: 'Menu',
    collapsed: true,
    setState: callBack,
};
export const UncollapsedMode = Template.bind({});
UncollapsedMode.args = {
    titleValue: 'Menu',
    collapsed: false,
    setState: callBack,
};



export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false);
    return (
        <Accordion
            titleValue={'Users'}
            collapsed={value}
            setState={setValue}
        />
    )
};