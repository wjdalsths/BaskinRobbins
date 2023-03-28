import styled from "@emotion/styled";

export const Container = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid #ebebeb;
  background: url(http://www.baskinrobbins.co.kr/assets/images/menu/bg_icecream_corn_4.png)
    50% 100% no-repeat;
  background-size: 50px auto;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const Name = styled.div`
  margin-top: 40px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;

  p {
    font-size: 12px;
    color: #918983;
  }
`;

export const Thumbnail = styled.div`
  position: absolute;
  top: 111px;
  cursor: pointer;
`;
