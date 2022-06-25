import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {OnOff} from './components/OnOff/OnOff';

type PageTitlePropsType = {
    title: string
}

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [onOffValue, setOnOffValue] = useState<boolean>(false)

    return (
        <div className={'App'}>
            <PageTitle title={'This is APP component'}/>
            Article 1
            <Rating value={ratingValue} setRating={setRatingValue}/>
            <Accordion titleValue={'Users'} collapsed={accordionCollapsed} setState={setAccordionCollapsed}/>
            <UncontrolledAccordion titleValue={'New menu'}/>
            <UncontrolledRating />
            <UncontrolledOnOff />
            <OnOff value={onOffValue} setValue={setOnOffValue}/>
        </div>
    );
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}

export default App;
