import React from 'react';

type StarPropsType = {
    value: RatingValueType
    selected: boolean
    onClickHandler: (value: RatingValueType) => void
}

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    value: RatingValueType
    setRating: (value: RatingValueType) => void
}

export const Rating = React.memo(RatingPresent);

function RatingPresent(props: RatingPropsType) {
    return (
        <div>
            <Star selected={props.value > 0} value={1} onClickHandler={props.setRating}/>
            <Star selected={props.value > 1} value={2} onClickHandler={props.setRating}/>
            <Star selected={props.value > 2} value={3} onClickHandler={props.setRating}/>
            <Star selected={props.value > 3} value={4} onClickHandler={props.setRating}/>
            <Star selected={props.value > 4} value={5} onClickHandler={props.setRating}/>
        </div>);
}

function Star(props: StarPropsType) {
    const onClickHandler = () => {
      props.onClickHandler(props.value)
    }
    return <span onClick={onClickHandler}>
        {props.selected ? <b>star </b> : 'star '}
    </span>;
}