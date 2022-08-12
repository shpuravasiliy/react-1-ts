import React, {FC, useEffect, useState} from 'react';
import style from './Clock.module.css'


type PropsType = {
    clockType: 'analog' | 'digital'
}

const Clock: FC<PropsType> = (props) => {
    // analogClockBg

    const [date, setDate] = useState(new Date());

    // let timer = useRef<ReturnType<typeof setInterval>>()

    useEffect(() => {
        const setIntervalId = setInterval(() => {
            console.log('tick')
            setDate(new Date())
        }, 1000)
        return () => clearInterval(setIntervalId)
    }, []);

    const convertTime = (num: number) => num < 10 ? '0' + num : num;

    const hours = convertTime(date.getHours());
    const minutes = convertTime(date.getMinutes());
    const seconds = convertTime(date.getSeconds());

    const hoursArrowAngle = (date.getHours() * 30) + (date.getMinutes() / 2);
    const minutesArrowAngle = (date.getMinutes() * 6);
    const secondsArrowAngle = (date.getSeconds() * 6);

    return (
        <>
            {props.clockType === 'digital'
                ? (<div className={style.digitalBlock}>
                <span>{hours}</span>
                :
                <span>{minutes}</span>
                :
                <span>{seconds}</span>
            </div>)
                : (<article className={`${style.clock}`}>
                    <div
                        className={style.hoursContainer}
                        style={{transform: `rotateZ(${hoursArrowAngle}deg)`}}
                    >
                        <div className={`${style.hours}`}></div>
                    </div>
                    <div
                        className={style.minutesContainer}
                        style={{transform: `rotateZ(${minutesArrowAngle}deg)`}}
                    >
                        <div className={style.minutes}></div>
                    </div>
                    <div
                        className={style.secondsContainer}
                        style={{transform: `rotateZ(${secondsArrowAngle}deg)`}}
                    >
                        <div className={style.seconds}></div>
                    </div>
                </article>)
            }
        </>
    );
};


export default Clock;