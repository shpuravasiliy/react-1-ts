import React from 'react';

type StarPropsType = {
    selected: boolean
}
type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>);
}

function Star(props: StarPropsType) {
    return props.selected ? <span><b>star</b> </span> : <span>star </span>;
}