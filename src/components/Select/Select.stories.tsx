import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Select, selectItems} from './Select';

export default {
    title: 'components/Select',
    component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
    const selectItems: selectItems[] = [
        {
            title: 'Moscow',
            value: '2'
        },
        {
            title: 'New-York',
            value: '4'
        },
        {
            title: 'London',
            value: '6'
        },
        {
            title: 'Paris',
            value: '8'
        },
        {
            title: 'Berlin',
            value: '10'
        },
        {
            title: 'Madrid',
            value: '12'
        },
    ]

    const [selected, setSelected] = useState<string>(selectItems[0].title)
    return <Select
        setSelected={setSelected}
        selected={selected}
        items={selectItems}
    />

};

export const SelectMode = Template.bind({});
