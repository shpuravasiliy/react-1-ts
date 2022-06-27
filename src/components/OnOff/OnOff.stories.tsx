import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {OnOff} from './OnOff';
import {action} from '@storybook/addon-actions';

export default {
    title: 'components/OnOff',
    component: OnOff,
    // argTypes: {
    //     onClick: {action: 'on or off clicked'},
    // }
} as ComponentMeta<typeof OnOff>;

const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args} />;

export const OnMode = Template.bind({});
OnMode.args = {
    value: true,

};

export const OffMode = Template.bind({});
OffMode.args = {
    value: false,
    setValue: action('asda'),
};

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false);
    return (
        <OnOff
            value={value}
            setValue={setValue}
        />
    )
};