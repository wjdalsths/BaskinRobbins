import styled from "@emotion/styled";

export const RList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-bottom: 100px;
  padding-top: 10px;
  border: 3px solid #ff7c98;
  border-radius: 25px;
  /* background-color: #ebebeb; */
  position: relative;
`;
export const Icecream = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Name = styled.div``;
export const Thumbnail = styled.div`
  background: url(http://www.baskinrobbins.co.kr/assets/images/menu/bg_icecream_corn_4.png)
    50% 100% no-repeat;
  background-size: 50px auto;
`;

export const Add = styled.div`
  position: absolute;
  right: 20px;
  top: -25px;
  cursor: pointer;
`;
