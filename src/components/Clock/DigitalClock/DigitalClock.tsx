import React from 'react';
import style from './DigitalClock.module.css';

const DigitalClock = (props: { hours: number, minutes: number, seconds: number }) => {
    const convertTime = (num: number) => num < 10 ? '0' + num : num;

    return <div className={style.digitalBlock}>
        <span>{convertTime(props.hours)}</span>
        :
        <span>{convertTime(props.minutes)}</span>
        :
        <span>{convertTime(props.seconds)}</span>
    </div>;
};

export default DigitalClock;