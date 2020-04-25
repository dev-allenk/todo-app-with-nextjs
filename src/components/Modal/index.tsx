import React from "react";
import S from "./styles";

function Modal({ children }: { children: React.ReactNode }) {
  return <S.Background>{children}</S.Background>;
}

export default Modal;
