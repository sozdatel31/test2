import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import {Rating, RatingValueType} from "./Rating";

export default {
    title: 'Rating stories',
    component: Rating,
} as Meta;

export const EmptyStar = () => <Rating setRatingValue={a=>a} value={0}/>
export const Rating1 = () => <Rating setRatingValue={a=>a} value={1}/>
export const Rating2 = () => <Rating setRatingValue={a=>a} value={2}/>
export const Rating3 = () => <Rating setRatingValue={a=>a} value={3}/>
export const Rating4 = () => <Rating setRatingValue={a=>a} value={4}/>
export const Rating5 = () => <Rating setRatingValue={a=>a} value={5}/>
export const ChangeRating = () => {
    const [rating, setRating] = useState<RatingValueType>(5)
    return <Rating setRatingValue={setRating} value={rating}/>}

