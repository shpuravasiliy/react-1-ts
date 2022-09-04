import React from 'react';
import style from './AnalogClock.module.css';

const AnalogClock = (props: { hours: number, minutes: number, seconds: number }) => (
    <div className={style.clock}>
        <div
            className={style.hours}
            style={{transform: `rotateZ(${props.hours * 30 + (props.minutes / 2)}deg)`}}
        />
        <div
            className={style.minutes}
            style={{transform: `rotateZ(${props.minutes * 6}deg)`}}
        />
        <div
            className={style.seconds}
            style={{transform: `rotateZ(${props.seconds * 6}deg)`}}
        />
    </div>
)

export default AnalogClock;