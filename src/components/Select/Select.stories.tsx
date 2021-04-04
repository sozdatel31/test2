import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import {action} from "@storybook/addon-actions";
import {Select, SelectPropsType} from "./Select";


export default {
    title: 'Select stories',
    component: Select,
} as Meta;

const citySelect = [
    {title: "Minsk", value: "1"},
    {title: "Moskow", value: "2"},
    {title: "Kiev", value: "3"},
]

const callback = action("clicked  true/false")
const callbackOnClick = action("clicked  ")

export const SelectGo = () => {
    const [value, setValue] = useState('1')
    return (
    <div>
        <Select
            value={value}
            onChange={setValue}
            items={citySelect}
        />
    </div>)
}