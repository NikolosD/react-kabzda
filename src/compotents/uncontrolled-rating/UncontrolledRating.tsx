import React, {useState} from 'react';

type PropsType = {

}
type ValueType = 0 | 1 | 2 | 3 | 4 | 5

function UncontrolledRating(props: PropsType) {
    const [value, setValue] = useState(0)

    const setValueHandler = (value: ValueType) => {
        setValue(value)
    }

    return <div>
        <Star selected={value > 0} callBack={()=>setValueHandler(1)}/>
        <Star selected={value > 1} callBack={()=>setValueHandler(2)}/>
        <Star selected={value > 2} callBack={()=>setValueHandler(3)}/>
        <Star selected={value > 3} callBack={()=>setValueHandler(4)}/>
        <Star selected={value > 4} callBack={()=>setValueHandler(5)}/>
    </div>

}

type StarPropsType = {
    selected: boolean
    callBack: () => void
}


function Star(props: StarPropsType) {
    return<span onClick={props.callBack}>
        {props.selected ? <b>star </b> : 'star '}
    </span>
}

export default UncontrolledRating;