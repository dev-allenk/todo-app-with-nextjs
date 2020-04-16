import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Layout = styled.div`
  width: 500px;
  min-height: 500px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
`;

export default { Layout, Wrapper };
