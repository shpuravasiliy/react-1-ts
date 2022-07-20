import React from 'react';
import style from './Select.module.css'

export type SelectPropsType = {
    selected: string
    setSelected: (id: string) => void
    collapsed: boolean
    setCollapsed: (newState: boolean) => void
    items: selectItems[]

}
type SelectTitlePropsType = {
    title: string
    setState: () => void
}

type SelectBodyPropsType = {
    items: selectItems[]
    setSelected: (id: string) => void
    setCollapsed: () => void
}

export type selectItems = {
    title: string
    value: string
}

export function Select(props: SelectPropsType) {
    const stateHandler = () => {
        props.setCollapsed(!props.collapsed)
    }
    return (
        <div className={style.selectMain}>
            <SelectTitle
                title={props.selected}
                setState={stateHandler}
            />
            {props.collapsed && <SelectBody
                items={props.items}
                setSelected={props.setSelected}
                setCollapsed={() => props.setCollapsed(!props.collapsed)}
            />}
        </div>
    )
}

function SelectTitle(props: SelectTitlePropsType) {
    const onCLickHandler = () => {
        props.setState();
    }
    return (
        <div
            onClick={onCLickHandler}
            className={style.selectTitle}
        >{props.title}</div>
    )
}

function SelectBody(props: SelectBodyPropsType) {
    const itemOnClickHandler = (id: string) => {
        props.setSelected(id);
        props.setCollapsed();
    }
    const itemOnBlurHandler = () => {
        props.setCollapsed();
    }
    return (
        <div className={style.selectBody}>
            {props.items.map(i => <div
                key={i.value}
                className={style.selectItem}
                onClick={() => itemOnClickHandler(i.title)}
                onBlur={itemOnBlurHandler}

            >{i.title}</div>)}
        </div>
    )
}