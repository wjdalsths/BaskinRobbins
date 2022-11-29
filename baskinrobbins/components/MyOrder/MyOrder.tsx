import { NextPage } from "next";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import * as S from "./style";
import Image from "next/image";
import { useRecoilState, useRecoilValue } from "recoil";
import { CartList } from "../../types/CartList";
import { CartAList, CartNum } from "../../Util/state";

const MyOrder: NextPage = () => {
  const CartValue = useRecoilValue<CartList[]>(CartAList);
  const [cartNum, setCartNum] = useRecoilState(CartNum);

  return (
    <>
      <Navbar />
      <S.Container>
        <S.Title>나의 주문 목록</S.Title>
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
                </S.Thumbnail>
              </S.IList>
            ))
          )}

          {/* <S.IList>
            <S.Name>asdf</S.Name>
            <S.Thumbnail></S.Thumbnail>
          </S.IList>
          <S.IList>
            <S.Name>asdf</S.Name>
            <S.Thumbnail></S.Thumbnail>
          </S.IList>
          <S.IList>
            <S.Name>asdf</S.Name>
            <S.Thumbnail></S.Thumbnail>
          </S.IList> */}
        </S.IcecreamList>
      </S.Container>
      <Footer />
    </>
  );
};

export default MyOrder;
