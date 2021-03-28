import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion stories',
    component: Accordion,
} as Meta;

const callback = action("clicked accordion true/false")
export const AccordionOnMode = ()=> <Accordion collapse={false} title={"User"} setAccCollapse={callback}/>
export const AccordionOffMode = ()=> <Accordion collapse={true} title={"Menu"} setAccCollapse={callback}/>

export const AccordionControlled = () => {
    const [acc, setAcc] = useState<boolean>(true)
    return (
        <Accordion collapse={acc} title={"Menu"} setAccCollapse={setAcc}/>
    )
}