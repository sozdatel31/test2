import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import {action} from "@storybook/addon-actions";
import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    title: 'UncontrolledAccordion stories',
    component: UncontrolledAccordion,
} as Meta;

const callback = action("clicked accordion true/false")
export const AccordionOnMode = ()=> <UncontrolledAccordion title={"privet marafet"}/>
