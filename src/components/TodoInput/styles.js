import styled from "styled-components";
import { MAIN_COLOR } from "../../constants";

const Form = styled.form`
  display: flex;
  height: 40px;
`;

const Input = styled.input`
  flex: 1;
  padding: 0 8px;
`;

const Button = styled.button`
  width: 64px;
  background-color: #fff;
  border-radius: 5px;
  &:hover {
    background-color: ${MAIN_COLOR};
    color: #fff;
  }
`;

export default { Input, Button, Form };
