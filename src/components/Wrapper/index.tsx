import S from "./styles";

interface props {
  children: JSX.Element[];
}

export default function Wrapper({ children }: props) {
  return (
    <S.Wrapper>
      <S.Layout>{children}</S.Layout>
    </S.Wrapper>
  );
}
