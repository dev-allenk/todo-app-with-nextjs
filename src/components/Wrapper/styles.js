import styled from "styled-components";
import { device } from "../../constants";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const InnerWrapper = styled.div`
  width: 100%;
  min-height: 500px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  @media ${device.desktop} {
    width: 750px;
  }
`;

export default { InnerWrapper, Wrapper };
