import { NextPage } from "next";
import * as S from "./style";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { IceRecommend } from "../../data/IceRecommend";
import RecommendList from "../RecommendList/RecommendList";

const IceRecommed: NextPage = () => {
  return (
    <>
      <S.Container>
        <Navbar />
        <S.Title>쿼터 추천</S.Title>
        <S.List>
          {IceRecommend.map((item) => (
            <RecommendList
              name1={item.name1}
              name2={item.name2}
              name3={item.name3}
              name4={item.name4}
              photo_url1={item.photo_url1}
              photo_url2={item.photo_url2}
              photo_url3={item.photo_url3}
              photo_url4={item.photo_url4}
            />
          ))}
        </S.List>
        <Footer />
      </S.Container>
    </>
  );
};
export default IceRecommed;
