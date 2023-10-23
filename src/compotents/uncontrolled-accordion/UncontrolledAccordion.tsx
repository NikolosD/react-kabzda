import React, { useReducer } from 'react';
import { reducer, TOGGLE_CONSTANT, StateType } from './reducer'; // Import StateType from your reducer file

type PropsType = {
    title: string;
};

function UncontrolledAccordion(props: PropsType) {
    const initialState: StateType = { collapsed: false }; // Define the initial state
    const [state, dispatch] = useReducer(reducer, initialState);

    const setCollapsedHandler = () => {
        dispatch({ type: TOGGLE_CONSTANT });
    };

    return (
        <div>
            <AccordionTitle title={props.title} callBack={setCollapsedHandler} />
            {!state.collapsed && <AccordionBody />}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string;
    callBack: () => void;
};

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={(event: React.MouseEvent<HTMLHeadingElement>) => props.callBack()}>
            {props.title}
        </h3>
    );
}

function AccordionBody() {
    console.log('AccordionBody rendering');
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default UncontrolledAccordion;
