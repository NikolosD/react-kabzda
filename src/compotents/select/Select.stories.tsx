import {useState} from 'react';
import {SelectComponent} from './Select';
import {SelectChangeEvent} from '@mui/material';


export  default {
    title: 'select',
};
export const ControlledSelect = () => {
    const [value, setValue] = useState<string>('');
    const items = [
        {id: 1, name: 'Pasha'},
        {id: 2, name: 'Stas'},
        {id: 3, name: 'Yana'},
        {id: 4, name: 'Vova'},
    ]
    const onChangeHandler = (e: SelectChangeEvent) => {
        setValue(e.target.value);
    }

    return <SelectComponent value={value} handleChange={onChangeHandler} items={items}/>
}