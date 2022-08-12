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