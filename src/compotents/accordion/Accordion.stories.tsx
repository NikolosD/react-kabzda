// import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './Accordion';
import {useState} from 'react';
import {action} from '@storybook/addon-actions'


// const meta: Meta<typeof Accordion> = {
//     component: Accordion,
// };


// export default meta;
// type  Story = StoryObj<typeof Accordion>
// export const FirstStory: Story = {
//     args: {
//         title: "hello",
//         collapsed: true,
//     },
// };

export default {
    title: 'Accordion stories',
    component: Accordion,
};

const onClickCallback = action('some item was clicked')
const onChangeHandler = action('onClick')
export const CollapsedAccordion = () => {
    return <Accordion
        title={'Collapsed Accordion'}
        collapsed={true}
        callBack={onChangeHandler}
        item={[]}
        onClickCallBack={onClickCallback}
    />
}
export const OpenAccordion = () => {
    return <Accordion
        title={'Open Accordion'}
        collapsed={false}
        callBack={onChangeHandler}
        item={[{id: 1, name: 'Pasha'},
            {id: 2, name: 'Stas'},
            {id: 3, name: 'Yana'},
            {id: 4, name: 'Vova'}]}
        onClickCallBack={onClickCallback}
    />
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(true)
    return <Accordion
        title={'Demo Accordion'}
        collapsed={false}
        callBack={() => setCollapsed(!collapsed)}
        item={[{id: 1, name: 'Pasha'},
            {id: 2, name: 'Stas'},
            {id: 3, name: 'Yana'},
            {id: 4, name: 'Vova'}]}
        onClickCallBack={(id: number)=>{alert(`user with ID ${id} should be happy`)}}
    />
}