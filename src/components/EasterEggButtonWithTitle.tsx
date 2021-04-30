import styled, { keyframes } from "styled-components";
import { isPropertySignature } from "typescript";
import { device } from '../config/size';

const sqew: any = keyframes`
    from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const EasterEggStyle: any = styled.div`
    width: 140px;
    height: 200px;
    background-color: lightblue;
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    box-shadow: ${(props: any) => props.boxShadow}
    &:hover {
        animation: ${sqew} 8s infinite;
    }
    background: ${(props: any) => props.background ? props.background: 'lightblue'} 
`;

const EasterEggShadowStyle: any = styled.div`
    background-color: rgba(0,0,0,0.1);
    border-radius:50%;
    z-index:-1;
    width:130px;
    height:20px;
    box-shadow: 200px;
    `;



const StyledText: any = styled.div`
    font-size:20px;
`;

export const EasterEggButtonWithTitle = (props: any) => 
    <div>
        <div style={{display:'flex', flexDirection: 'column'}}>
        <EasterEggStyle onClick={props.onClick} boxShadow={props.boxShadow} background = {props.background}>
        </EasterEggStyle>
        <EasterEggShadowStyle />
        </div>
        <StyledText>
                {props.price}
        </StyledText>
    </div>







