import { createGlobalStyle } from "styled-components";
import { device } from "../../constants";

const GlobalStyles = createGlobalStyle`
  @media ${device.desktop} {
    body {
      font-family: 'NanumSquare', sans-serif !important;
    }
  }
`;

export default GlobalStyles;
