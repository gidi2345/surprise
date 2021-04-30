import React from 'react';
import styled from "styled-components";
import { EasterEggButtonWithTitle} from './EasterEggButtonWithTitle';
import Egg1 from '../assets/images/egg1.png';
import Egg2 from '../assets/images/egg2.png';
import Egg3 from '../assets/images/egg3.png';

const StyledPriceButtonsList: any = styled.div`
    display: flex;
    height:400px;
    width:600px;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
`;

export const SimpleList = (props: any ) => {
    const { childComp, array } = props;
        return (
        <StyledPriceButtonsList>
            {[{image: Egg1, height:50, width:50},{image: Egg2, height:100, width:100},{image: Egg3, height:120, width:120}]
            .map((item: any) => {return React.cloneElement(childComp, { height: item.height, width: item.width, src: item.image}) })}           
        </StyledPriceButtonsList>
        )
    }




