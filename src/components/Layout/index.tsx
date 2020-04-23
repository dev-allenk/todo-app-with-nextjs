import S from "./styles";

interface props {
  children: JSX.Element | JSX.Element[];
}

export default function Layout({ children }: props) {
  return <S.Layout>{children}</S.Layout>;
}
