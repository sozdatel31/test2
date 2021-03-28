import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import {OnOff, OnOffPropsType} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff stories',
    component: OnOff,
} as Meta;

const callback = action("clicked on and off")
export const OnMode = ()=> <OnOff power={true} setPower={callback}/>
export const ContrOnOff = () => {
    const [power, setPower] = useState<boolean>(true)
    return (
        <OnOff power={power} setPower={setPower}/>
    )
}