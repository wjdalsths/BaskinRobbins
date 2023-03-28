import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "베스킨라빈스B";
`;

export const Title = styled.div`
  padding: 60px 0 20px;
  font-size: 57px;
`;
export const Description = styled.div`
  color: #948780;
  font-size: 16px;
  line-height: 20px;
`;
export const Thumbnail = styled.div`
  width: 900px;
  margin-top: -30px;
  background: url(http://www.baskinrobbins.co.kr/assets/images/menu/bg_icecream_corn_4.png)
    50% 100% no-repeat;
  background-size: 110px auto;
  text-align: center;
`;
export const Add = styled.div`
  width: 900px;
  height: 25px;
  border-bottom: 2px solid #ff7c98;
  text-align: center;
  margin-bottom: 60px;
  cursor: pointer;
  a {
    display: inline-block;
    font-size: 17px;
    background: #f56f98;
    line-height: 50px;
    width: 178px;
    height: 50px;
    text-align: center;
    color: #fff;
    border-radius: 25px;
  }
`;

export const NutritionalInfo = styled.div`
  table {
    font-family: "";
    width: 900px;
    /* border-top: 2px solid #ff7c98; */
    border-collapse: collapse;
    th {
      border-bottom: 1px solid #d8d1cc;
      color: #ff7c98;
      font-size: 13px;
      line-height: 42px;
    }
    tbody {
      td {
        border-bottom: 1px solid #d8d1cc;
        color: #2f231c;
        font-size: 13px;
        text-align: center;
        line-height: 46px;
        :nth-child(even) {
          background: #f7f7f7;
        }
      }
    }
  }
`;
