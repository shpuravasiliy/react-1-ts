import React, {useMemo, useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Select} from './Select';

export default {
    title: 'components/SelectMemoExample',
    component: Select,
} as ComponentMeta<typeof Select>;

type exampleType = {
    title: string
    value: string
    countryId: number
    population: number
}

const selectItems: exampleType[] = [
    {
        title: 'Moscow',
        value: '2',
        countryId: 1,
        population: 15000000,
    },
    {
        title: 'New-York',
        value: '4',
        countryId: 2,
        population: 8000000,
    },
    {
        title: 'London',
        value: '6',
        countryId: 3,
        population: 11000000,
    },
    {
        title: 'Paris',
        value: '8',
        countryId: 4,
        population: 12000000,
    },
    {
        title: 'Berlin',
        value: '10',
        countryId: 5,
        population: 7000000,
    },
    {
        title: 'Madrid',
        value: '12',
        countryId: 6,
        population: 3000000,
    },
    {
        title: 'Minsk',
        value: '12',
        countryId: 7,
        population: 2000000,
    },
    {
        title: 'St. Petersburg',
        value: '12',
        countryId: 1,
        population: 5000000,
    },
]

const Template: ComponentStory<typeof Select> = (args) => {

    const [selected1, setSelected1] = useState<string>(selectItems[0].title)
    const [selected2, setSelected2] = useState<string>(selectItems[0].title)
    const [selected3, setSelected3] = useState<string>(selectItems[0].title)

    const [value1, setValue1] = useState<number>(1);
    const [value2, setValue2] = useState<number>(10000000);
    const [value3, setValue3] = useState<number>(10000000);

    const selectItems1 = useMemo(() => {
        return [...selectItems].filter(item => item.countryId === value1);
    }, [value1]);
    const selectItems2 = useMemo(() => {
        return [...selectItems].filter(item => item.population >= value2);
    }, [value2]);
    const selectItems3 = useMemo(() => {
        return [...selectItems].filter(item => item.population < value3);
    }, [value3]);


    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Select
                setSelected={setSelected1}
                selected={selected1}
                items={selectItems1}
            />
            <input onKeyDown={(e) => {
                e.key === 'Enter' && setValue1(+e.currentTarget.value);
                e.currentTarget.value = '';
            }}/>
            <Select
                setSelected={setSelected2}
                selected={selected2}
                items={selectItems2}
            />
            <input onKeyDown={(e) => {
                e.key === 'Enter' && setValue2(+e.currentTarget.value);
                e.currentTarget.value = '';
            }}/>
            <Select
                setSelected={setSelected3}
                selected={selected3}
                items={selectItems3}
            />
            <input onKeyDown={(e) => {
                e.key === 'Enter' && setValue3(+e.currentTarget.value);
                e.currentTarget.value = '';
            }}/>
        </div>
    )

};

export const SelectMode = Template.bind({});
