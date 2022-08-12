import React, {useState} from 'react';

export default {
    title: 'useState demo',
}

export const Example1 = () => {
    const [counter, setCounter] = useState(0);

    return <>
        <div>{counter}</div>
        <button
            onClick={() => setCounter((prev) => prev + 1)}
            children={'inc'}
        />
    </>
}