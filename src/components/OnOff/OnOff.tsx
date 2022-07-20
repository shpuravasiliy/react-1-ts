import React from 'react';
import s from './OnOff.module.css'

export type OnOffPropsType = {
    value: boolean
    setValue: (value: boolean) => void
}
type ButtonPropsType = {
    name: string
    className: string
    callBack: () => void
}
type CircleLampPropsType = {
    className: string
}

export const OnOff: React.FC<OnOffPropsType> = (props) => {
    // console.log('Rendering OnOff');
    // const [value, setValue] = useState(false);
    const onClickOnHandler = () => props.value ? props.value : props.setValue(!props.value);
    const onClickOffHandler = () => props.value ? props.setValue(!props.value) : props.value;

    return (
        <div className={s.main}>
            <Button
                name={'On'}
                className={props.value ? s.onButton : ''}
                callBack={onClickOnHandler}
            />
            <Button
                name={'Off'}
                className={!props.value ? s.offButton : ''}
                callBack={onClickOffHandler}
            />
            <CircleLamp className={props.value ? s.circleLampGreen : s.circleLampRed}/>
        </div>
    );
};

const Button: React.FC<ButtonPropsType> = (props) => {
    return (
        <span>
            <button
                className={props.className}
                onClick={props.callBack}
            >{props.name}</button>
        </span>
    )
}

const CircleLamp: React.FC<CircleLampPropsType> = (props) => {
    return (
        <span>
            <div className={s.circleLamp + ' ' + props.className}></div>
        </span>
    )
}