import {Image} from './Image';
import {PriceLabel} from './PriceLabel';
import Product from '../types/ProductI'; 
import styled  from 'styled-components';

const StyledImageAndPrice: any = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    height: ${(props: any) => props.isBig ? '350px' : '200px'};
    width: ${(props: any) => props.isBig ? '350px' : '200px'};
        border-radius: 10px;
        border-style: solid;
        border-width: 2px;
        border-color: #b1054b2e;
        box-shadow: 5px 5px #b1054b2e;
    &:active {
        box-shadow: 0 5px #b1054b2e;
        transform: translateY(4px);
    }
`;

const StyledImageContainer: any = styled.div`
    display: flex;
    flex:0.7;
    justify-content:center;
    align-items: center;
    object-fit: fill;
`;

const StyledPriceContainer: any = styled.div`
    display: flex;
    flex:0.3;
    justify-content:center;
    align-items: center;
`;

export const ImageAndPrice = (props: Product | any) => {
   
     return (<StyledImageAndPrice isBig = {props.isBig} style={{}}>
         <StyledImageContainer>
            <Image {...props}/>
         </StyledImageContainer>
         <StyledPriceContainer>
            <PriceLabel {...props}/>
         </StyledPriceContainer>  
     </StyledImageAndPrice> )
}
    