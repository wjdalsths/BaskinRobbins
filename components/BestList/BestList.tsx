import { NextPage } from "next";
import { BestList } from "../../types/BestList";
import * as S from "./style";
import Image from "next/image";

const Best: NextPage<BestList> = ({ id, rank, name, thumbnail }) => {
  return (
    <>
      <S.Container>
        <S.Thumbnail>
          <S.Rank>{rank}위</S.Rank>
          <Image src={thumbnail} alt="icecream" width={140} height={140} />
        </S.Thumbnail>
        <S.Name>{name}</S.Name>
      </S.Container>
    </>
  );
};

export default Best;
