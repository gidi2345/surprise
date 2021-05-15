import React from 'react';
import styled from "styled-components";

const StyledPriceButtonsList: any = styled.div`
    display: flex;
    height:100%;
    width:50%;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
`;

export const SimpleList = (props: any ) => {
    const { childComp, pricesList } = props;
        return (
        <StyledPriceButtonsList>
            {pricesList.map((product: any) => { return React.cloneElement(childComp, { key: Math.random(), product})})}           
        </StyledPriceButtonsList>
        )
    }




