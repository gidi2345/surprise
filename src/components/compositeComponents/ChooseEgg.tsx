import styled from "styled-components";
import {SimpleList, ImageAndPrice} from '../../components';
import {INITIAL_STATE_TYPE} from './../../../src/redux/mainReducer/main.reducer';
import {useSelector} from 'react-redux';

const ChooseEggContainer: any = styled.div`
     display: flex;
     flex:1;
     align-items: center;
     flex-direction: column;
`;

const SimpleListContainer: any = styled.div`
        display: flex;
        flex: 0.4;
        align-items: center;
        justify-content: center;
`;

const ImageAndPriceContainer: any = styled.div`
        display: flex;
        flex: 0.35;
        align-items: center;
        justify-content: center;
`;

const OrderButton: any = styled.div`
marginTop: 15px;
align-celf: center;
justify-celf: center;
width: 200px;
height: 50px;
border-radius: 15px;
background-color: #ff99ff;
color: white;
fontSize:  22px;
display: flex;
justify-content: center;
align-items: center;
`;

export const ChooseEgg = (props: any) =>  {
    const {products, choosenProducts} = useSelector((state: INITIAL_STATE_TYPE) => state);

   return (
   <ChooseEggContainer>
        <SimpleListContainer>
            <SimpleList childComp={<ImageAndPrice isBig={false}/>} pricesList={products}></SimpleList>
        </SimpleListContainer>
        <ImageAndPriceContainer>
            <ImageAndPrice isBig={true} product={choosenProducts}/>
        </ImageAndPriceContainer>
        <OrderButton>
            Order Now
        </OrderButton>
    </ChooseEggContainer>
)
}

export default ChooseEgg;


