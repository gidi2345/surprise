import styled from "styled-components";
import { isPropertySignature } from "typescript";
import { device } from '../config/size';

const StyledScrollableLayout: any = styled.div`
  width:100%;
  overflow-y:scroll;
  background-color: blanchedalmond;
`;

export const ScrollableLayout = (props: any) => <StyledScrollableLayout></StyledScrollableLayout>