import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px auto;
  font-family: "베스킨라빈스B";
`;

export const Title = styled.div`
  margin: 60px 0;
  font-size: 25px;
`;

export const IcecreamList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 200px);
  grid-template-rows: repeat(2, 230px);
  justify-content: center;
  p {
    width: 100%;
    position: absolute;
    text-align: center;
    font-size: 30px;
    color: #ff7c98;
  }
`;

export const IList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Name = styled.div``;
export const Thumbnail = styled.div`
  width: 165px;
  height: 165px;
  border-radius: 50%;
  margin: 7px 0;
  background: #f4f4f4
    url(http://www.baskinrobbins.co.kr/assets/images/menu/bg_icecream_corn_4.png)
    50% 100% no-repeat;
  background-size: 50px auto;
`;
