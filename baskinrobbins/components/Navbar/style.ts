import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  border-top: 3px solid #ff7c98;
  font-family: "베스킨라빈스B";
`;

export const Logo = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 10px 0;
`;
export const Menu = styled.div`
  width: 100%;
  height: 100%;
  line-height: 30px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #3f291a;
  font-size: 20px;

  a {
    margin-right: 30px;
  }
`;
