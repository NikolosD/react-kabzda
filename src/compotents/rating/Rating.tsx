import React, {Dispatch, SetStateAction} from 'react';
import {RatingValueType} from '../../App';

export type RatingValuePropsType = {
    value: RatingValueType
    callBack: Dispatch<SetStateAction<RatingValueType>>
}

function Rating(props: RatingValuePropsType) {
    return <div>
        <Star selected={props.value > 0} callBack={props.callBack} value={1}/>
        <Star selected={props.value > 1} callBack={props.callBack} value={2}/>
        <Star selected={props.value > 2} callBack={props.callBack} value={3}/>
        <Star selected={props.value > 3} callBack={props.callBack} value={4}/>
        <Star selected={props.value > 4} callBack={props.callBack} value={5}/>
    </div>

}

type StarPropsType = {
    selected: boolean
    value: RatingValueType
    callBack: Dispatch<RatingValueType>
}


function Star(props: StarPropsType) {

    const onClickHandler = () => {
        props.callBack(props.value)
    }

    return <span onClick={onClickHandler}>
        {props.selected ? <b>star </b> : 'star '}
    </span>

}

export default Rating;