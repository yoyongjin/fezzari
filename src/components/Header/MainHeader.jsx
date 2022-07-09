import { Link } from "react-router-dom";
import styled from "styled-components";
import MainNavigation from "../nav/MainNavigation";

const MainHeader = () => {
  return (
    <Header>
      <Logo to="/">Fezzari</Logo>
      <MainNavigation />
      <Auth to="/login">로그인</Auth>
    </Header>
  );
};

const Header = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
  background-color: #964b00;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
`;

const Logo = styled(Link)`
  line-height: 72.5px;
  font-family: "Lato", sans-serif;
  font-size: 2rem;
  color: white;
  margin: 0;
  text-decoration: none;
`;

const Auth = styled(Link)`
  text-decoration: none;
  color: white;

  &:hover {
    color: black;
  }
`;

export default MainHeader;
