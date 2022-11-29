import styled from "@emotion/styled";

export const Container = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 60px auto;
`;

export const Type = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div`
  margin: 40px 0;
`;
export const Wrap = styled.div`
  width: 400px;
  display: grid;
  grid-template-columns: repeat(2, 215px);
  grid-template-rows: repeat(2, 150px);
  span {
    display: block;
    font-size: 14px;
    color: #837e7c;
    margin-bottom: 9px;
  }
  strong {
    display: block;
    color: #ffa94c;
    font-size: 12px;
    margin-top: 10px;
  }
`;
export const TList1 = styled.div`
  background: url(http://www.baskinrobbins.co.kr/assets/images/menu/ico_p1.gif)
    no-repeat 5px 19px;
  padding-left: 78px;
  font-size: 11px;
  color: #aca09a;
`;
export const TList2 = styled.div`
  background: url(http://www.baskinrobbins.co.kr/assets/images/menu/ico_p2.gif)
    no-repeat 5px 19px;
  padding-left: 78px;
  font-size: 11px;
  color: #aca09a;
`;
export const TList3 = styled.div`
  background: url(http://www.baskinrobbins.co.kr/assets/images/menu/ico_p3.gif)
    no-repeat 5px 19px;
  padding-left: 78px;
  font-size: 11px;
  color: #aca09a;
`;
export const TList4 = styled.div`
  background: url(http://www.baskinrobbins.co.kr/assets/images/menu/ico_p4.gif)
    no-repeat 5px 19px;
  padding-left: 78px;
  font-size: 11px;
  color: #aca09a;
`;

export const IcecreamList = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 200px);
  grid-template-rows: repeat(2, 230px);
  justify-content: center;
  font-family: "베스킨라빈스B";

  p {
    width: 35%;
    position: absolute;
    text-align: center;
    font-size: 30px;
    margin-top: 200px;
    color: #ff7c98;
  }
`;

export const IList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
export const Name = styled.div``;
export const Thumbnail = styled.div`
  width: 165px;
  height: 165px;
  background: #f4f4f4;
  border-radius: 50%;
  margin: 7px 0;
`;
export const DelBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: "베스킨라빈스B";
  cursor: pointer;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 30px;
    background-color: #ff7c98;
    color: white;
    border-radius: 25px;
    font-size: 14px;
  }
`;

export const OrderBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  font-family: "베스킨라빈스B";

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 50px;
    background-color: #ff7c98;
    color: white;
    border-radius: 25px;
    font-size: 22px;
  }
`;
