import styled from "@emotion/styled";

export const Container = styled.div`
  width: 220px;
  height: 195px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-right: 10px; */
`;
export const Rank = styled.div`
  position: absolute;
  top: -6px;
  width: 31px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  line-height: 12px;
  color: white;
  background: url(http://www.baskinrobbins.co.kr/assets/images/menu/icon_rank_4.png)
    no-repeat;
`;

export const Thumbnail = styled.div`
  position: relative;
  width: 164px;
  height: 164px;
  margin: 5px 0 7px;
  border-radius: 50%;
  background: #f4f4f4
    url(http://www.baskinrobbins.co.kr/assets/images/menu/bg_icecream_corn_4.png)
    50% 100% no-repeat;
  background-size: 40px auto;
  text-align: center;
  line-height: 82px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-top: 22px;
  }
`;

export const Name = styled.div`
  font-size: 13px;
`;
