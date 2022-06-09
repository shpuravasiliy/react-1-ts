import React, {useState} from 'react';

type UncontrolledAccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}
type UncontrolledAccordionTitlePropsType = {
    title: string
    callback: () => void
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    const [state, setState] = useState(false);
    const onClickHandler = () => {
        setState(!state)
    }
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                callback={onClickHandler}

            />
            {state && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props: UncontrolledAccordionTitlePropsType) {
    const accordionStyle = {
        cursor: 'pointer',
    }
    return (
        <h3 onClick={props.callback} style={accordionStyle}>{props.title}</h3>
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