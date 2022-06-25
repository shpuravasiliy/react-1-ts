import React from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setState: (newState: boolean) => void
}
type AccordionTitlePropsType = {
    title: string
    setState: () => void
}

export function Accordion(props: AccordionPropsType) {
    const stateHandler = () => {
      props.setState(!props.collapsed)
    }
    return (
        <div>
            <AccordionTitle title={props.titleValue} setState={stateHandler}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    const onCLickHandler = () => {
      props.setState();
    }
    return (
        <h3 onClick={onCLickHandler}>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}