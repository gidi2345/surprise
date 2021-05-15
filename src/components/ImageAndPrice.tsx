import {Image} from './Image';
import {PriceLabel} from './PriceLabel';
import Product from '../types/ProductI'; 
import styled  from 'styled-components';
import { device } from '../config/size';

const StyledImageAndPrice: any = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    @media ${device.mobileS} { 
        height: 100px;
        width: 100px;
      }
      @media ${device.mobileM} { 
        height: 100px;
        width: 100px;
      }
      @media ${device.mobileL} { 
        height: 100px;
        width: 100px;
      }
    @media ${device.tablet} { 
        height: 100px;
        width: 100px;
      }
      @media ${device.laptopL} { 
        height: 250px;
        width: 250px;
      } 
      @media ${device.desktop} { 
        height: 400px;
        width: 400px;
      }  
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
    width:100%;
    height:70%;
    justify-content:center;
    align-items: center;
    object-fit: fill;
`;

const StyledPriceContainer: any = styled.div`
    display: flex;
    width:100%;
    height:30%;
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
    