import { NextPage } from "next";
import { IceDetail } from "../../types/IceDetail";
import { Nutritional } from "../../types/Nutritional";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import * as S from "./style";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { CartAList, CartNum } from "../../Util/state";
import { CartList } from "../../types/CartList";

const IcecreamDetail: NextPage<{
  data: IceDetail;
  Ndata: Nutritional;
}> = ({ data, Ndata }) => {
  const [cart, setCartList] = useRecoilState<CartList[]>(CartAList);
  const [cartNum, setCartNum] = useRecoilState(CartNum);

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
        <Navbar />
        <S.Title>{data.name}</S.Title>
        <S.Description>{data.description}</S.Description>
        <S.Thumbnail>
          <Image src={data.photo_url} alt="icecream" width={400} height={400} />
        </S.Thumbnail>
        <S.Add onClick={() => onClickAddCart(data.name, data.photo_url)}>
          <a>장바구니 추가하기</a>
        </S.Add>
        <S.NutritionalInfo>
          <p>영양정보 & 알레르기성분</p>
          <table>
            <thead>
              <tr>
                <th>제품명</th>
                <th>열량(kcal)</th>
                <th>나트륨(mg)</th>
                <th>당류(g)</th>
                <th>포화지방(g)</th>
                <th>단백질(g)</th>
                <th>알레르기 성분</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{Ndata.name}</td>
                <td>{Ndata.열량}</td>
                <td>{Ndata.나트륨}</td>
                <td>{Ndata.당류}</td>
                <td>{Ndata.포화지방}</td>
                <td>{Ndata.단백질}</td>
                <td>{Ndata.알레르기}</td>
              </tr>
            </tbody>
          </table>
        </S.NutritionalInfo>
        <Footer />
      </S.Container>
    </>
  );
};
export default IcecreamDetail;
