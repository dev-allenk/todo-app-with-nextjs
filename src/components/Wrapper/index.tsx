import S from "./styles";

interface Props {
  children: React.ReactNode;
}

export default function Wrapper({ children }: Props) {
  return (
    <S.Wrapper>
      <S.Layout>{children}</S.Layout>
    </S.Wrapper>
  );
}
