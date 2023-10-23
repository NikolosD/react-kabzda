import {ChangeEvent, useRef, useState} from 'react';

export  default {
    title: 'input',
};

export const UncontrolledInput = () => <input/>
export const TrackValueOfControlledInput = () => {
    const [value, setValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return<><input value={value} onChange={onChangeHandler}/>----{value}</>
}
export const GetValueOfControlledInputByButtonPress= () => {
    const [value, setValue] = useState('')
   const inputRef = useRef<HTMLInputElement>(null)
    const onClickHandler = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value);
        el.value = ''
    }
    return<><input ref={inputRef} /><button onClick={onClickHandler}>Save</button>----{value}</>
}


export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    const inputRef = useRef(null)
    return <input ref={inputRef} value={parentValue} onChange={onChangeHandler}/>
}
export const ControlledCheckBox = () => {
    const [value, setValue] = useState(false);
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked)
    }

    return <input checked={value}  type={'checkbox'} onChange={onChangeHandler}/>
}
export const ControlledSelect = () => {
    const [value, setValue] = useState<string | undefined>(undefined);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
    }

    return <select value={value} onChange={onChangeHandler}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Kiev</option>
        <option value={'3'}>Mykolaiv</option>
    </select>
}
export const ControlledInputWithFixedValue = () => <input value={'Yo'}/>