import styled from "styled-components";

import { useScroll } from "../../../hooks/useScroll";

// component import
import Menu from "../header/Menu";

const Header = () => {
  const { scrollY } = useScroll();

  let headerController = null;

  if (scrollY <= 50) {
    headerController = null;
  } else {
    headerController = (
      <HeaderContainer>
        <Menu />
      </HeaderContainer>
    );
  }

  return <>{headerController}</>;
};

export default Header;

const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;

  position: fixed;

  z-index: 9999;

  background-color: #fff;

  transition: 0.2s;

  @media screen and (max-width: 767px) {
    height: 60px;
  }

  @media screen and (max-width: 599px) {
    height: 50px;
  }
`;
