import styled from "styled-components";

interface SpanProps {
  completed: boolean;
}

const ITEM_HEIGHT = "32px";
const CLOSE_BUTTON_WIDTH = "4px";
const CLOSE_BUTTON_COLOR = "#ff5d5d";

const Li = styled.li`
  display: flex;
  align-items: center;
  margin: 4px 0;
  min-height: ${ITEM_HEIGHT};
`;

const Span = styled.span<SpanProps>`
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  &:hover {
    text-decoration: underline;
    cursor: default;
  }
`;

const CloseButton = styled.button`
  position: relative;
  width: ${ITEM_HEIGHT};
  height: ${ITEM_HEIGHT};
  border: none;
  background-color: transparent;
  transition: all 0.25s;
  &:hover {
    transform: rotate(180deg);
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: ${CLOSE_BUTTON_WIDTH};
    height: 20px;
    background-color: ${CLOSE_BUTTON_COLOR};
    transform: rotate(-45deg);
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: ${CLOSE_BUTTON_WIDTH};
    height: 20px;
    background-color: ${CLOSE_BUTTON_COLOR};
    transform: rotate(45deg);
  }
`;

export default { Li, Span, CloseButton };
