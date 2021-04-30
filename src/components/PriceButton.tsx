import styled from "styled-components";
import { isPropertySignature } from "typescript";
import { device } from '../config/size';

const StyledPriceButton: any = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius:50px;
    border-width:2px;
    border-style: solid;
    border-color: black;

`;

const StyledText: any = styled.div`
    font-size:20px;
`;

export const PriceButton = (props: any) =>  
<StyledPriceButton onClick={props.onClick} bgColor = {props.bgColor}>
    <StyledText>
        {props.price}
    </StyledText>
</StyledPriceButton>




