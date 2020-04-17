import { createGlobalStyle } from "styled-components";

const size = {
  tablet: 768,
  desktop: 1200,
};
const device = {
  tablet: `(min-width: ${size.tablet}px) and
           (max-width: ${size.desktop - 1}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
};

const GlobalStyles = createGlobalStyle`
  @media ${device.desktop} {
    body {
      font-family: 'NanumSquare', sans-serif !important;
    }
  }
`;

export default GlobalStyles;
