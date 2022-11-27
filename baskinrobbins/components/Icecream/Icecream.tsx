import * as S from "./style";
import { NextPage } from "next";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { BestList } from "../../data/bestLIst";
import { IcecreamList } from "../../data/IcecreamList";
import Best from "../BestList/BestList";
import Ice from "../IcereamList/IcecreamList";
import Image from "next/image";

const Icecream: NextPage = () => {
  return (
    <>
      <S.Container>
        <Navbar />
        <S.Title>
          <Image
            src={
              "http://www.baskinrobbins.co.kr/assets/images/menu/h_monthly_best_icecream.png"
            }
            alt="MONTHLY BEST ICECREAM"
            width={214}
            height={42}
          />
        </S.Title>
        <S.BestIcecream>
          {BestList.map((item) => (
            <Best
              key={item.id}
              id={item.id}
              rank={item.rank}
              name={item.name}
              thumbnail={item.thumbnail}
            ></Best>
          ))}
        </S.BestIcecream>
        <S.Title>
          <Image
            src={
              "http://www.baskinrobbins.co.kr/assets/images/menu/h_title_A.png"
            }
            alt="MONTHLY BEST ICECREAM"
            width={94}
            height={17}
          />
        </S.Title>
        <S.Icecream>
          {IcecreamList.map((item) => (
            <Ice
              key={item.id}
              id={item.id}
              name={item.name}
              photo_url={item.photo_url}
              description={item.description}
            ></Ice>
          ))}
        </S.Icecream>
        <Footer />
      </S.Container>
    </>
  );
};

export default Icecream;
