import React, {Dispatch, SetStateAction} from 'react';
import styled, {css} from 'styled-components';


type PropsType = {
    on: boolean;
    callback: Dispatch<SetStateAction<boolean>>;
}

export const OnOff = (props: PropsType) => {
    const onClickHandler = (value: boolean) => {
        props.callback(value)
    }

    return (
        <OnOffStyled>
            <div>
                <BtnOn state={props.on}  onClick={() => onClickHandler(true)}>On</BtnOn>
                <BtnOff state={props.on}  onClick={() => onClickHandler(false)}>Off</BtnOff>
            </div>
            <Lamp state={props.on}></Lamp>
        </OnOffStyled>
    );
};


const OnOffStyled = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: row;
  gap: 30px;
`
type BtnType = {
    state: boolean
}
const BtnOn = styled.button<BtnType>`
  width: 150px;
  height: 100px;
  background-color: antiquewhite;
  border-radius: 20px 0 0  20px ;
  ${props => props.state === true && css`
    background-color: green;
  `}
`

const BtnOff = styled.button<BtnType>`
  width: 150px;
  height: 100px;
  background-color: antiquewhite;
  border-radius: 0 20px 20px 0;
  ${props => props.state === false && css`
    background-color: red;
  `}
`

const Lamp = styled.button<BtnType>`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: antiquewhite;
  ${props => props.state === true && css`
    background-color: green;
  `}
  ${props => props.state === false && css`
    background-color: red;
  `}
`

