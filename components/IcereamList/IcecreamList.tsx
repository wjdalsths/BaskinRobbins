import { NextPage } from "next";
import { useRouter } from "next/router";
import { IcecreamList } from "../../types/IcecreamList";
import * as S from "./style";
import Image from "next/image";
import { useRecoilState, useRecoilValue } from "recoil";
import { CartAList, CartNum } from "../../Util/state";
import { CartList } from "../../types/CartList";

const Ice: NextPage<IcecreamList> = ({ id, name, photo_url }) => {
  const router = useRouter();
  const [cart, setCartList] = useRecoilState<CartList[]>(CartAList);
  const [cartNum, setCartNum] = useRecoilState(CartNum);

  const onClickIcecream = (Iname: string) => {
    router.push(`/${Iname}`);
  };

  const onClickAddCart = (Iname: string, Ithumbnail: string) => {
    if (cartNum == 4) {
      alert("메뉴가 다 선택되었습니다.");
    } else {
      setCartNum(cartNum + 1);
      const data: CartList = {
        name: Iname,
        thumbnail: Ithumbnail,
      };
      setCartList([...cart, data]);
      alert("메뉴가 추가되었습니다.");
    }
  };

  return (
    <>
      <S.Container>
        <S.Name>
          <span onClick={() => onClickIcecream(name)}>{name}</span>
          <br />
          <p onClick={() => onClickAddCart(name, photo_url)}>장바구니 추가</p>
        </S.Name>
        <S.Thumbnail onClick={() => onClickIcecream(name)}>
          <Image src={photo_url} alt="icecream" width={180} height={180} />
        </S.Thumbnail>
      </S.Container>
    </>
  );
};

export default Ice;
