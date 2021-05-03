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
    const { childComp, pricesList } = props;
        return (
        <StyledPriceButtonsList>
            {pricesList.map((item: any) => { return React.cloneElement(childComp, { key:item.cssProperties.height, height: item.cssProperties.height, width: item.cssProperties.width, src: item.imageSrc, uuid: item.uuid})})}           
        </StyledPriceButtonsList>
        )
    }




