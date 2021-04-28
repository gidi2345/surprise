import styled from "styled-components";
import { isPropertySignature } from "typescript";

const StyledHeader: any = styled.div`
  width:100%;
  height: 1.7em;
  opacity: 0.9;
  background-color: ${(props: any) => props.bgColor};
`;

export const Header = (props: any) => <StyledHeader bgColor = {props.bgColor}></StyledHeader>




