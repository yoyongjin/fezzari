import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MainNavigation = () => {
  return (
    <NavContainer>
      <MainNav to="/reservation">예약하기</MainNav>
      <MainNav to="/myzzari">내자리</MainNav>
    </NavContainer>
  );
};
const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const MainNav = styled(NavLink)`
  text-decoration: none;
  color: white;

  &:hover {
    color: #95bcf0;
    padding-bottom: 0.25rem;
    border-bottom: 4px solid #95bcf0;
  }
`;

export default MainNavigation;
