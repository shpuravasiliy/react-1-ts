import React, {KeyboardEvent, useState} from 'react';
import style from './Select.module.css'

export type SelectPropsType = {
    selected: string
    setSelected: (id: string) => void
    items: selectItems[]

}
type SelectTitlePropsType = {
    title: string
    setState: () => void
}
type SelectBodyPropsType = {
    focused: string | null
    title: string
    items: selectItems[]
    setSelected: (id: string) => void
    setCollapsed: () => void
    setFocused: (id: string) => void
}
export type selectItems = {
    title: string
    value: string
}

export const Select = React.memo(SelectPresent);

function SelectPresent(props: SelectPropsType) {

    const [selectCollapsed, setSelectCollapsed] = useState<boolean>(false);
    const [focused, setFocused] = useState<string>(props.selected);

    const stateHandler = () => {
        setSelectCollapsed(!selectCollapsed)
    }
    console.log('select rendered')
    return (
        <div className={style.selectMain}>
            <SelectTitle
                title={props.selected}
                setState={stateHandler}
            />
            {selectCollapsed && <SelectBody
                setFocused={setFocused}
                focused={focused}
                items={props.items}
                title={props.selected}
                setSelected={props.setSelected}
                setCollapsed={stateHandler}
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
        props.setFocused(id);
        props.setCollapsed();
    }
    const itemOnBlurHandler = () => {
        props.setCollapsed();
    }

    return (
        <div className={style.selectBody}>
            {props.items.map(i => {
                const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
                    if (e.key === 'ArrowDown') {
                        // for (let j = 0; j < props.items.length; j++) {
                        //     if (props.items[j].title === props.focused) {
                        //         props.setFocused(props.items[j + 1].title)
                        //         break;
                        //     }
                        // }
                        props.setFocused(props.items[props.items.findIndex(el => el.title === props.focused) === props.items.length - 1 ? 0 : props.items.findIndex(el => el.title === props.focused) + 1].title)
                    } else if (e.key === 'ArrowUp') {
                        // for (let j = 0; j < props.items.length; j++) {
                        //     if (props.items[j].title === props.focused) {
                        //         props.setFocused(props.items[j + 1].title)
                        //         break;
                        //     }
                        // }
                        props.setFocused(props.items[props.items.findIndex(el => el.title === props.focused) === 0 ? props.items.length - 1 : props.items.findIndex(el => el.title === props.focused) - 1].title)
                    }
                    if (e.key === 'Enter') itemOnClickHandler(props.focused ? props.focused : '')
                }
                return <div
                    tabIndex={0}
                    key={i?.value}
                    className={(i?.title === props.title ? style.active : '') + ' ' + (i?.title === props.focused ? style.focused : '') + ' ' + style.selectItem}
                    onClick={() => itemOnClickHandler(i ? i.title : '')}
                    onBlur={itemOnBlurHandler}
                    onKeyDown={onKeyDownHandler}
                >{i ? i.title : ''}</div>
            })}
        </div>
    )
}