import Link from "next/link";
import S from "./styles";

export default function Header() {
  return (
    <S.Header>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/manage">
        <a>Manage</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </S.Header>
  );
}
