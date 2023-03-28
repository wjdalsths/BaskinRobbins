import { NextPage } from "next";
import * as S from "./style";
import { Recommend } from "../../types/Recommend";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { CartAList, CartNum } from "../../Util/state";
import { CartList } from "../../types/CartList";
import { useRouter } from "next/router";

const RecommendList: NextPage<Recommend> = ({
  name1,
  name2,
  name3,
  name4,
  photo_url1,
  photo_url2,
  photo_url3,
  photo_url4,
}) => {
  const router = useRouter();

  const [cart, setCartList] = useRecoilState<CartList[]>(CartAList);
  const [cartNum, setCartNum] = useRecoilState(CartNum);

  const onClickAddCart = (
    name1: string,
    name2: string,
    name3: string,
    name4: string,
    photo_url1: string,
    photo_url2: string,
    photo_url3: string,
    photo_url4: string
  ) => {
    setCartNum(4);

    const data: CartList[] = [
      {
        name: name1,
        thumbnail: photo_url1,
      },
      {
        name: name2,
        thumbnail: photo_url2,
      },
      {
        name: name3,
        thumbnail: photo_url3,
      },
      {
        name: name4,
        thumbnail: photo_url4,
      },
    ];
    setCartList(data);
    alert("메뉴가 추가되었습니다.");
    router.push("/Cart");
  };
  return (
    <>
      <S.RList>
        <S.Add
          onClick={() =>
            onClickAddCart(
              name1,
              name2,
              name3,
              name4,
              photo_url1,
              photo_url2,
              photo_url3,
              photo_url4
            )
          }
        >
          주문하기
        </S.Add>
        <S.Icecream>
          <S.Name>{name1}</S.Name>
          <S.Thumbnail>
            <Image src={photo_url1} alt="icecream" width={140} height={140} />
          </S.Thumbnail>
        </S.Icecream>
        <S.Icecream>
          <S.Name>{name2}</S.Name>
          <S.Thumbnail>
            <Image src={photo_url2} alt="icecream" width={140} height={140} />
          </S.Thumbnail>
        </S.Icecream>
        <S.Icecream>
          <S.Name>{name3}</S.Name>
          <S.Thumbnail>
            <Image src={photo_url3} alt="icecream" width={140} height={140} />
          </S.Thumbnail>
        </S.Icecream>
        <S.Icecream>
          <S.Name>{name4}</S.Name>
          <S.Thumbnail>
            <Image src={photo_url4} alt="icecream" width={140} height={140} />
          </S.Thumbnail>
        </S.Icecream>
      </S.RList>
    </>
  );
};

export default RecommendList;
