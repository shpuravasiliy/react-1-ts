import React, {useEffect, useRef, useState} from 'react';

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
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000)
    }, [])

    const sec = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds()
    const min = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
    const hour = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()

    return <>
        {`${hour}:${min}:${sec}`}
    </>
}