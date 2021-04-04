import React, {useState, KeyboardEvent} from "react";
import s from './Select.module.css'

export type ItemsPropsType = {
    title: string
    value: any
}

export type SelectPropsType = {

    value: any
    onChange: (value: any) => void;
    items: ItemsPropsType[]
}

export function Select(props: SelectPropsType) {
    const [active, setActive] = useState<boolean>(false)
    const [hoveredElementValue, sethoveredElementValue] = useState(props.value)
    const selectedItem = props.items.find(f => f.value === props.value);
    const hoveredItem = props.items.find(f => f.value ===hoveredElementValue);
    const toggleItems = () => setActive(!active)
const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        for (let i=0; i<props.items.length; i++) {

        }

}

    return (
        <div className={s.select} tabIndex={0} onKeyUp={onKeyUp}>
            <span className={s.selectedItem} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            {active &&
            <div className={s.selectItems}>
                {props.items.map(i => <div
                    onMouseEnter ={()=>{sethoveredElementValue(i.value)}}
                    className={s.item + ' ' + (hoveredItem === i ? s.selected : '')}
                    onClick={() => {
                        props.onChange(i.value);
                        toggleItems()
                    }}
                    key={i.value}>{i.title}</div>)}
            </div>
            }
        </div>
    );

}