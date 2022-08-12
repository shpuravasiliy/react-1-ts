import React, {useEffect, useState} from 'react';

export default {
    title: 'React/useEffect demo',
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log('SimpleExample');
        document.title = counter.toString()
    })

    return <>
        <div>{counter}</div>
        <button
            onClick={() => setCounter((prev) => prev + 1)}
            children={'inc'}
        />
    </>
}

export const SetIntervalExample = () => {
    const currentDate = new Date();

    const [time, setTime] = useState({
        hours: currentDate.getHours(),
        minutes: currentDate.getMinutes(),
        seconds: currentDate.getSeconds(),
    });

    useEffect(() => {
       setInterval(() => {
           const newTime = {
               hours: currentDate.getHours(),
               minutes: currentDate.getMinutes(),
               seconds: currentDate.getSeconds(),
           }
           setTime(newTime)
       }, 1000)
    })

    const sec = time.seconds < 10 ? '0' + time.seconds : time.seconds
    return <>
        {`${time.hours}:${time.minutes}:${sec}`}
    </>
}