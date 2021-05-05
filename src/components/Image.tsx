import styled from "styled-components";
import React, { useReducer } from 'react'; 
import { useDispatch } from 'react-redux';
import mainReducer from '../redux/mainReducer/main.reducer';
import { INITIAL_STATE } from '../redux/mainReducer/main.reducer';
import  MainActionTypes  from '../redux/mainReducer/main.types';
import Product from '../types/ProductI';

export const Image = (props: any | Product) => {
    const dispatch = useDispatch();
    const { uuid, imageSrc, cssProperties} = props.product;
    return <img onClick={() => dispatch({type: MainActionTypes.CHANGE_CHOOSEN_EGG, payload: uuid}) } width={cssProperties.width} height={cssProperties.height} src={imageSrc}></img>
}