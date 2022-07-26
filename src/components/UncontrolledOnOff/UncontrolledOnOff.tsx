import React, {useState} from 'react';
import s from './UncontrolledOnOff.module.css'

type OnOffPropsType = {
    defaultOn?: boolean
}
type ButtonPropsType = {
    name: string
    className: string
    callBack: () => void
}
type CircleLampPropsType = {
    className: string
}

const UncontrolledOnOffPresent: React.FC<OnOffPropsType> = (props) => {
    console.log('Rendering OnOff');
    const [value, setValue] = useState(props.defaultOn ? props.defaultOn : false);
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

export const UncontrolledOnOff = React.memo(UncontrolledOnOffPresent);

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