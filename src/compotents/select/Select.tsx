import React from 'react';
import {FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent} from '@mui/material';

type ItemType = {
    name: string
    id: number
}
type SelectPropsType = {
    value: string
    handleChange: (value: SelectChangeEvent) => void
    items: ItemType[]
}
export const SelectComponent: React.FC<SelectPropsType> = ({value, handleChange, items}) => {
    return <div>
        <FormControl sx={{m: 1, minWidth: 300}}>
            <InputLabel id="demo-simple-select-helper-label">Name student</InputLabel>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={value}
                label="Age"
                onChange={handleChange}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {items.map(m => <MenuItem value={m.id}>{m.name}</MenuItem>)}
            </Select>
            <FormHelperText>{value === '' ? "студент не выбран":`ID студента ${value} -- выбран`}</FormHelperText>
        </FormControl>
    </div>
}