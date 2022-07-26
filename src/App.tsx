import React, {useState} from 'react';
import './App.css';
import {Select, selectItems} from './components/Select/Select';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';

type PageTitlePropsType = {
    title: string
}

function App() {

    // const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    // const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    // const [onOffValue, setOnOffValue] = useState<boolean>(false)
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

    return (
        <div className={'App'}>
            {/*<PageTitle title={'This is APP component'}/>*/}
            {/*Article 1*/}
            {/*<Rating value={ratingValue} setRating={setRatingValue}/>*/}
            {/*<Accordion titleValue={'Users'} collapsed={accordionCollapsed} setState={setAccordionCollapsed} items={['1', '2', '3', '4']}/>*/}
            <UncontrolledAccordion titleValue={'New menu'}/>
            {/*<UncontrolledRating />*/}
            {/*<UncontrolledOnOff />*/}
            {/*<OnOff value={onOffValue} setValue={setOnOffValue}/>*/}

            <Select
                selected={selected}
                setSelected={setSelected}
                items={selectItems}
            />

        </div>
    );
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}

export default App;
