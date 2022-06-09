import React, {useState} from 'react';

type StarPropsType = {
    selected: boolean
    id: 0 | 1 | 2 | 3 | 4 | 5
    callBack: (id: number) => void
}
// type RatingPropsType = {
//     // value: 0 | 1 | 2 | 3 | 4 | 5
// }

export function UncontrolledRating() {
    const [value, setValue] = useState<number>(0);
    const onClickHandler = (val: number) => {
      setValue(val);
    }
    return (
        <div>
            {}
            <Star id={1} selected={value > 0} callBack={onClickHandler}/>
            <Star id={2} selected={value > 1} callBack={onClickHandler}/>
            <Star id={3} selected={value > 2} callBack={onClickHandler}/>
            <Star id={4} selected={value > 3} callBack={onClickHandler}/>
            <Star id={5} selected={value > 4} callBack={onClickHandler}/>
        </div>);
}

function Star(props: StarPropsType) {
    const onClickHandler = () => {
        props.callBack(props.id)
    }
    const starStyle = {
        cursor: 'pointer',
    }
    return (
        <span style={starStyle} onClick={onClickHandler}>{ props.selected ? <b>star </b> : 'star '}</span>
    );
}