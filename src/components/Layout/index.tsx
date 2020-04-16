import S from "./styles";

interface props {
  children: JSX.Element[];
}

export default function Layout({ children }: props) {
  return (
    <S.Wrapper>
      <S.Layout>{children}</S.Layout>
    </S.Wrapper>
  );
}
