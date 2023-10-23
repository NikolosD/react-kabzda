import {OnOff} from './OnOff';
import {useState} from 'react';
import {action} from '@storybook/addon-actions';



export default {
    title: 'On-Off stories',
    component: OnOff,
};

const callback = action('on or off clicked');

export const OnMode = () => <OnOff on={true} callback={callback}/>
export const OffMode = () => <OnOff on={false} callback={callback}/>
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff on={value} callback={setValue}/>
}