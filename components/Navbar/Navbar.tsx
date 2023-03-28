import * as S from "./style";
import Lo from "public/images/Logo.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <S.Container>
        <Link href="/">
          <S.Logo>
            <Lo />
          </S.Logo>
        </Link>
        <S.Menu>
          <Link href="/">아이스크림</Link>
          <Link href="IceRecommend">아이스크림 추천</Link>
          <Link href="Cart">장바구니</Link>
          <Link href="Myorder">내 주문</Link>
        </S.Menu>
      </S.Container>
    </>
  );
};

export default Navbar;
