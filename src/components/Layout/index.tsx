import S from "./styles";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return <S.Layout>{children}</S.Layout>;
}
