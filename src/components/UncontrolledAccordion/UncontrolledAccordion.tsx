import React, {useReducer} from 'react';
import {reducer, TOGGLE_CONSTANT} from './Reducer';

type UncontrolledAccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}
type UncontrolledAccordionTitlePropsType = {
    title: string
    callback: () => void
}

const initialState = {
    collapsed: false,
}

export const UncontrolledAccordion = React.memo(UncontrolledAccordionPresent);

function UncontrolledAccordionPresent(props: UncontrolledAccordionPropsType) {

    // const [state, setState] = useState(false);
    const [state, dispatch] = useReducer(reducer, initialState);
    const onClickHandler = () => {
        // setState(!state)
        dispatch({type: TOGGLE_CONSTANT});
    }
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                callback={onClickHandler}
            />
            {state.collapsed && <AccordionBody/>}
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