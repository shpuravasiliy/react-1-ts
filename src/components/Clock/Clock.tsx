import React, {FC, useEffect, useState} from 'react';
import AnalogClock from './AnalogClock/AnalogClock';
import DigitalClock from './DigitalClock/DigitalClock';

const Clock: FC<{ clockType: 'analog' | 'digital' }> = ({clockType}) => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const setIntervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearInterval(setIntervalId)
    }, []);

    const currentTime = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    }

    return (
        <>
            {clockType === 'digital' ? <DigitalClock {...currentTime}/> : <AnalogClock {...currentTime}/>}
        </>
    );
};


export default Clock;