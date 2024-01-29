import styled from "styled-components";
import { useMoveToSection } from "../../../hooks/useMoveToSection";
import { useActiveScroll } from "../../../hooks/useActiveScroll";

import { MENU } from "../../../constants/menu";

const Menu = () => {
  const { handleMove } = useMoveToSection();

  const handleSelectMenu = (menu: string) => {
    handleMove(menu);
  };

  const { menuId } = useActiveScroll();

  return (
    <MenuContainer>
      <ul>
        {MENU.map((item) => (
          <li
            key={item}
            className={item === menuId ? "active" : ""}
            onClick={() => {
              handleSelectMenu(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </MenuContainer>
  );
};

export default Menu;

const MenuContainer = styled.div`
  width: 60%;
  height: 100%;

  margin: 0 auto;

  & ul {
    width: 100%;
    height: 100%;

    display: flex;
    flex-flow: row wrap;

    justify-content: space-around;
    align-items: center;

    & li {
      color: #00dfa2;

      font-size: 1rem;
      font-weight: bold;
      font-family: "Spoqa Han Sans Neo", "sans-serif";

      padding: 1rem 1.5rem;

      text-transform: uppercase;

      &:hover {
        cursor: pointer;
      }
    }

    .active {
      background-color: #00dfa2;
      color: white;

      font-size: 1.2rem;

      border-radius: 50px;

      transition: 0.2s;
    }

    @media screen and (max-width: 767px) {
      li {
        font-size: 0.8rem;

        padding: 0.8rem 1rem;
      }

      .active {
        font-size: 1rem;
      }
    }

    @media screen and (max-width: 599px) {
      li {
        font-size: 0.8rem;

        padding: 0.6rem 0.8rem;
      }

      .active {
        font-size: 1rem;
      }
    }
  }

  @media screen and (max-width: 1199px) {
    /* 타블렛 가로 */
    width: 80%;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
