import styled from "styled-components";
import { MAIN_COLOR } from "../../constants";

const Loader = styled.div`
  display: inline-block;
  width: 64px;
  height: 64px;
  border: 3px solid rgba(76, 128, 241, 0.3);
  border-radius: 50%;
  border-top-color: ${MAIN_COLOR};
  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default { Loader };
