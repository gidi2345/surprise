import styled from "styled-components";
import React, { useReducer } from 'react'; 
import { useDispatch } from 'react-redux';
import mainReducer from '../redux/mainReducer/main.reducer';
import { INITIAL_STATE } from '../redux/mainReducer/main.reducer';
import  MainActionTypes  from '../redux/mainReducer/main.types';



export const Image = (props: any) => {
    const dispatch = useDispatch();
    const { width , height, src, uuid} = props;
     return <img onClick={() => dispatch({type: MainActionTypes.CHANGE_CHOOSEN_EGG, payload: uuid}) } width={width} height={height} src={src}></img>
    }