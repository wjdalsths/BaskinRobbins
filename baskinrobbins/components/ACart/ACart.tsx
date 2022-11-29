import { NextPage } from "next";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import * as S from "./style";
import Image from "next/image";
import { useRecoilState, useRecoilValue } from "recoil";
import { CartList } from "../../types/CartList";
import { CartAList, CartNum } from "../../Util/state";
import Link from "next/link";

const ACart: NextPage = () => {
  const [CartValue, setCartList] = useRecoilState<CartList[]>(CartAList);
  const [cartNum, setCartNum] = useRecoilState(CartNum);
  const onClickDel = (Iname: string) => {
    setCartList(CartValue.filter((item: CartList) => item.name !== Iname));
    setCartNum(cartNum - 1);
    alert("메뉴가 삭제되었습니다.");
  };
  return (
    <>
      <Navbar />
      <S.Container>
        <S.Type>
          <S.Title>HARD PACK</S.Title>
          <S.Wrap>
            <S.TList1>
              <span>파인트</span>
              3가지 맛을 골라먹는 재미가 있는 사이즈(중량 320g)
              <strong>8,900원</strong>
            </S.TList1>
            <S.TList2>
              <span>쿼터</span>
              4가지 맛을 골라먹는 재미가 있는 사이즈 (중량 620g)
              <strong>17,000원</strong>
            </S.TList2>
            <S.TList3>
              <span>패밀리</span>
              5가지 맛을 나눠먹는 재미가 있는 사이즈 (중량 960g)
              <strong>24,000원</strong>
            </S.TList3>
            <S.TList4>
              <span>하프갤런</span>
              6가지 맛을 나눠먹는 재미가 있는 사이즈 (중량 1200g)
              <strong>29,000원</strong>
            </S.TList4>
          </S.Wrap>
        </S.Type>
        <S.IcecreamList>
          {cartNum == 0 ? (
            <p>주문 목록이 없습니다.</p>
          ) : (
            CartValue.map((item) => (
              <S.IList>
                <S.Name>{item.name}</S.Name>
                <S.Thumbnail>
                  <Image
                    src={item.thumbnail}
                    alt="icecream"
                    width={170}
                    height={170}
                  />
                  <S.DelBtn onClick={() => onClickDel(item.name)}>
                    <span>삭제하기</span>
                  </S.DelBtn>
                </S.Thumbnail>
              </S.IList>
            ))
          )}
          {/* <S.IList>
            <S.Name>asdf</S.Name>
            <S.Thumbnail></S.Thumbnail>
            <S.DelBtn>삭제하기</S.DelBtn>
          </S.IList>
          <S.IList>
            <S.Name>asdf</S.Name>
            <S.Thumbnail></S.Thumbnail>
            <S.DelBtn>삭제하기</S.DelBtn>
          </S.IList>
          <S.IList>
            <S.Name>asdf</S.Name>
            <S.Thumbnail></S.Thumbnail>
            <S.DelBtn>삭제하기</S.DelBtn>
          </S.IList> */}
        </S.IcecreamList>
      </S.Container>
      <S.OrderBtn>
        <Link href="Myorder">
          <p>주문하기</p>
        </Link>
      </S.OrderBtn>
      <Footer />
    </>
  );
};

export default ACart;
