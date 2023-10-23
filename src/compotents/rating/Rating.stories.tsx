import Rating from './Rating';
import {useState} from 'react';
import {RatingValueType} from '../../App';


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

export  default {
    title: 'Rating stories',
    component: Rating,
};

export const EmptyStars = () => <Rating value={0} callBack={()=>{}}/>
export const Rating1 = () => <Rating value={1} callBack={()=>{}}/>
export const Rating2 = () => <Rating value={2} callBack={()=>{}}/>
export const Rating3 = () => <Rating value={3} callBack={()=>{}}/>
export const Rating4 = () => <Rating value={4} callBack={()=>{}}/>
export const Rating5 = () => <Rating value={5} callBack={()=>{}}/>

export const ChangeRating = () => {
    const [rating, setRating] = useState<RatingValueType>(5);
    return <Rating value={rating} callBack={setRating}/>
}