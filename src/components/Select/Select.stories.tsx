import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Select, selectItems} from './Select';

export default {
    title: 'components/Select',
    component: Select,
} as ComponentMeta<typeof Select>;

const callBack = action('Select mode changed');

const Template: ComponentStory<typeof Select> = (args) => {
    const selectItems: selectItems[] = [
        {
            title: '1',
            value: '2'
        },
        {
            title: '3',
            value: '4'
        },
        {
            title: '5',
            value: '6'
        },
        {
            title: '7',
            value: '8'
        },
        {
            title: '9',
            value: '10'
        },
        {
            title: '11',
            value: '12'
        },
    ]

    const [selectCollapsed, setSelectCollapsed] = useState<boolean>(false)
    const [selected, setSelected] = useState<string>(selectItems[0].title)
    return <Select setSelected={setSelected} selected={selected} setCollapsed={setSelectCollapsed} collapsed={selectCollapsed} items={selectItems}/>

};
// const Template2: ComponentStory<typeof Select> = ({collapsed, setState, ...args}) => {
//     const [value, setValue] = useState<boolean>(false);
//     return (
//         <Select
//             collapsed={value}
//             setState={setValue} {...args}
//             items={['1', '2', '3', '4']}
//         />
//     )
// };

export const CollapsedMode = Template.bind({});
// CollapsedMode.args = {
//     selected: ,
//     collapsed: true,
//     setState: callBack,
//     items: ['1', '2', '3', '4']
// };
// export const UncollapsedMode = Template.bind({});
// UncollapsedMode.args = {
//     selected: 'Menu',
//     collapsed: false,
//     setState: callBack,
//     items: ['1', '2', '3', '4']
// };
//
//
// export const ModeChanging = Template2.bind({});
// ModeChanging.args = {
//     selected: 'Users',
// };