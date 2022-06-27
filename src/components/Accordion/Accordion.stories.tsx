import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Accordion} from './Accordion';


/**
 * Return obj of item category
 * @param category
 */
const getCategory = (category: string) => ({
    table: {
        category: category,
    }
})

export default {
    title: 'components/Accordion',
    component: Accordion,
    argTypes: {
        setState: {
            ...getCategory('Events')
        }
    }
} as ComponentMeta<typeof Accordion>;

const callBack = action('Accordion mode changed');

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;
const Template2: ComponentStory<typeof Accordion> = ({collapsed, setState, ...args}) => {
    const [value, setValue] = useState<boolean>(false);
    return (
        <Accordion
            collapsed={value}
            setState={setValue} {...args} />
    )
};

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


export const ModeChanging = Template2.bind({});
ModeChanging.args = {
    titleValue: 'Users',
};