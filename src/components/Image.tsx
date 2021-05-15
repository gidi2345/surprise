import styled from "styled-components";
import React, { useReducer } from 'react'; 
import { useDispatch } from 'react-redux';
import mainReducer from '../redux/mainReducer/main.reducer';
import { INITIAL_STATE } from '../redux/mainReducer/main.reducer';
import  MainActionTypes  from '../redux/mainReducer/main.types';
import Product from '../types/ProductI';
import { device } from '../config/size';


  const StyledImage: any = styled.img`
  @media ${device.mobileS} { 
    height: 60px;
    width: 60px;
  }
  @media ${device.mobileM} { 
    height: 75px;
    width: 75px;
  }
  @media ${device.mobileL} { 
    height: 80px;
    width: 80px;
  }
@media ${device.tablet} { 
    height: 100px;
    width: 100px;
  }
  @media ${device.desktop} { 
    height: 200px;
    width: 200px;
  }
`;

export const Image = (props: any | Product) => {
    const dispatch = useDispatch();
    const { uuid, imageSrc, cssProperties} = props.product;
    return <StyledImage onClick={() => dispatch({type: MainActionTypes.CHANGE_CHOOSEN_EGG, payload: uuid}) }  src={imageSrc}></StyledImage>
}