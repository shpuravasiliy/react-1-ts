import React, {useState} from 'react';
import s from './UncontrolledOnOff.module.css'

type OnOffPropsType = {
    // value: boolean
}
type ButtonPropsType = {
    name: string
    className: string
    callBack: () => void
}
type CircleLampPropsType = {
    className: string
}

export const UncontrolledOnOff: React.FC<OnOffPropsType> = (props) => {
    console.log('Rendering OnOff');
    const [value, setValue] = useState(false);
    const onClickOnHandler = () => {
        setValue(true);
        console.log(value);
    }
    const onClickOffHandler = () => {
        setValue(false);
        console.log(value);
    }
    return (
        <div className={s.main}>
            <Button
                name={'On'}
                className={value ? s.onButton : ''}
                callBack={onClickOnHandler}
            />
            <Button
                name={'Off'}
                className={!value ? s.offButton : ''}
                callBack={onClickOffHandler}
            />
            <CircleLamp className={value ? s.circleLampGreen : s.circleLampRed}/>
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