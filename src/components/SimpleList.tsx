import styled from "styled-components";
import { EasterEggButtonWithTitle} from './EasterEggButtonWithTitle';

const StyledPriceButtonsList: any = styled.div`
    display: flex;
    height:400px;
    width:600px;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
`;

export const SimpleList = (props: any ) => {
        return (
        <StyledPriceButtonsList>
            {[1,2,3].map((item: any) => <EasterEggButtonWithTitle boxShadow={'inset -10px -10px rgba(0,0,0,0.1)'} background={'repeating-linear-gradient(#f9c74f, #f9c74f 10px,#90be6d 10px, #90be6d 20px)'}></EasterEggButtonWithTitle>)}            
        </StyledPriceButtonsList>
        )
    }




