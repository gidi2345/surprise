import styled from "styled-components";
import { isPropertySignature } from "typescript";
import { device } from '../config/size';
import Product from '../types/ProductI';

const StyledPriceLabel: any = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width:100px;
`;

const StyledPriceText: any = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  font-size:28px;
  color: grey;
`;

export const PriceLabel = (props: any | Product) => { return <StyledPriceLabel>
<StyledPriceText>
  {props.product.price}$
</StyledPriceText>
</StyledPriceLabel>}




