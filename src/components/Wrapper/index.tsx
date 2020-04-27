import S from "./styles";

interface Props {
  children: React.ReactNode;
}

export default function Wrapper({ children }: Props) {
  return (
    <S.Wrapper>
      <S.InnerWrapper>{children}</S.InnerWrapper>
    </S.Wrapper>
  );
}
