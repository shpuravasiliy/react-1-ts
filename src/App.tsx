import React, {useState} from 'react';
import './App.css';
import {RatingValueType} from './components/Rating/Rating';
import {Select, selectItems} from './components/Select/Select';

type PageTitlePropsType = {
    title: string
}

function App() {

    // const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    // const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    // const [onOffValue, setOnOffValue] = useState<boolean>(false)
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

    return (
        <div className={'App'}>
            {/*<PageTitle title={'This is APP component'}/>*/}
            {/*Article 1*/}
            {/*<Rating value={ratingValue} setRating={setRatingValue}/>*/}
            {/*<Accordion titleValue={'Users'} collapsed={accordionCollapsed} setState={setAccordionCollapsed} items={['1', '2', '3', '4']}/>*/}
            {/*<UncontrolledAccordion titleValue={'New menu'}/>*/}
            {/*<UncontrolledRating />*/}
            {/*<UncontrolledOnOff />*/}
            {/*<OnOff value={onOffValue} setValue={setOnOffValue}/>*/}

            <Select
                selected={selected}
                setSelected={setSelected}
                collapsed={selectCollapsed}
                setCollapsed={setSelectCollapsed}
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
