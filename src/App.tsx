import React, {useState} from 'react';
import './App.css';
import Accordion from './compotents/accordion/Accordion';
import Rating from './compotents/rating/Rating';
import {OnOff} from './compotents/on-off/OnOff';
import UncontrolledAccordion from './compotents/uncontrolled-accordion/UncontrolledAccordion';
import UncontrolledRating from './compotents/uncontrolled-rating/UncontrolledRating';
import {UncontrolledOnOff} from './compotents/uncontrolled-on-off/UncontrolledOnOff';
import {SelectComponent} from './compotents/select/Select';
import {SelectChangeEvent} from '@mui/material';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

function App() {
    const [collapsed, setCollapsed] = useState(false)
    const [value, setValue] = useState<RatingValueType>(0)
    const [click, setClick] = useState(false)

    const setCollapsedHandler = () => setCollapsed(!collapsed)

    const items = [
        {id: 1, name: 'Pasha'},
        {id: 2, name: 'Stas'},
        {id: 3, name: 'Yana'},
        {id: 4, name: 'Vova'},
    ]
    const onClickHandler = (id: number) => {
        console.log(`${id} -- он кликнул`)
    }
    const [user, setUser] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setUser(event.target.value);
    };

    return (
        <div>
            <PageTitle title={'This is APP component'}/>
            <Rating value={value} callBack={setValue}/>
            <Accordion
                title={'Мenu'}
                collapsed={collapsed}
                callBack={setCollapsedHandler}
                onClickCallBack={onClickHandler}
                item={items}
            />
            <UncontrolledAccordion title={'Good'}/>
            <UncontrolledRating/>
            <OnOff on={click} callback={setClick}/>
            <UncontrolledOnOff/>
            <SelectComponent value={user} handleChange={handleChange} items={items}/>
        </div>
    );
}

function PageTitle(props: any) {
    return <h1>--- {props.title} ---</h1>
}

export default App;
