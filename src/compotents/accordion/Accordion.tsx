import React from "react";

type PropsType = {
    title: string
    collapsed: boolean
    callBack: () => void
    item: {
        id: number
        name: string
    }[]
    onClickCallBack: (id: number) => void
}

function Accordion(props: PropsType) {
    console.log("Accordion rendering")
        return<div>
            <AccordionTitle title={props.title} callBack={props.callBack}/>
            { !props.collapsed && <AccordionBody item={props.item} onClickCallBack={props.onClickCallBack}/>}
        </div>


}

type AccordionTitlePropsType = {
    title: string
    callBack: () => void
}

function AccordionTitle (props: AccordionTitlePropsType){
    return<h3 onClick={(event) => props.callBack()}> {props.title} </h3>
}

type AccordionBodyType = {
    item: {
        id: number
        name: string
    }[]
    onClickCallBack: (id: number) => void
}
function AccordionBody(props: AccordionBodyType) {
    console.log("AccordionBody rendering")
    return<ul>
        {props.item.map(m => <li key={m.id} onClick={()=>props.onClickCallBack(m.id)}>{m.name}</li>)}
    </ul>
}

export default Accordion;