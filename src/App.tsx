import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';

type PageTitlePropsType = {
    title: string
}

function App() {
    return (
        <div className={'App'}>
            <PageTitle title={'This is APP component'}/>
            Article 1
            <Rating value={3}/>
            <Accordion titleValue={'Users'} collapsed={false}/>
            <UncontrolledAccordion titleValue={'New menu'}/>
            <UncontrolledRating />
            {/*Article 2*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            <OnOff />
        </div>
    );
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}

export default App;
