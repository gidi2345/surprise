import styled from "styled-components";
import { device } from '../config/size';

const StyledHeader: any = styled.div`
  width:100%;
  opacity: 0.9;
  box-shadow: 10px 5px 5px #c5c9c7;
  background-color: ${(props: any) => props.bgColor};
  @media ${device.tablet} { 
    height: 3em;
  }
  @media ${device.desktop} { 
    height: 3em;
  }
  @media ${device.mobileS} { 
    height: 1.7em;
  }
`;

export const Header = (props: any) => {console.log(device); return <StyledHeader bgColor = {props.bgColor}></StyledHeader>}




