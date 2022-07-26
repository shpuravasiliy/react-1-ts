import React from 'react';

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    /**
     * Set new state
     */
    setState: (newState: boolean) => void
    items: string[]
}
type AccordionTitlePropsType = {
    title: string
    setState: () => void
}

type AccordionBodyPropsType = {
    items: string[]
}

export const Accordion = React.memo(AccordionPresent);

function AccordionPresent(props: AccordionPropsType) {
    const stateHandler = () => {
        props.setState(!props.collapsed)
    }
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                setState={stateHandler}
            />
            {!props.collapsed && <AccordionBody items={props.items}/>}
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

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map(i => <li key={i}>{i}</li>)}
        </ul>
    )
}