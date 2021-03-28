import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import {action} from "@storybook/addon-actions";
import {UncontrolledRating} from "./UncontrolledRating";


export default {
    title: 'UncontrolledRating stories',
    component: UncontrolledRating
} as Meta;

const callback = action("clicked Rating 1-5")
export const RatingMode = ()=> <UncontrolledRating/>