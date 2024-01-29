import styled from "styled-components";
import { useMoveToSection } from "../../hooks/useMoveToSection";

const Footer = () => {
  const { handleMove } = useMoveToSection();

  return (
    <FooterContainer>
      <div className="footer-title">
        <h1 className="main">Thank you for</h1>
        <h1 className="sub">Watching!!</h1>
        <p>❤️</p>
      </div>
      <div
        className="top-button-box"
        onClick={() => {
          handleMove("profile");
        }}
      >
        <p className="top-button">프로필 다시보기</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.section`
  background-color: #3a3a3a;

  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  .footer-title {
    .main {
      color: white;

      font-family: "SBAggroB";
      font-size: 7rem;

      text-align: center;
    }

    .sub {
      color: #00dfa2;

      font-family: "SBAggroB";
      font-size: 8rem;

      text-align: center;

      margin-top: 5rem;
    }

    p {
      font-size: 7rem;

      text-align: center;

      margin-top: 7rem;

      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -o-user-select: none;
      user-select: none;
    }
  }

  .top-button-box {
    background-color: white;
    color: #3a3a3a;

    font-family: "SBAggroB";
    font-size: 1.3rem;

    margin-top: 2rem;
    padding: 1.5rem 2rem;

    border-radius: 50px;
    border: 5px solid #00dfa2;

    &:hover {
      cursor: pointer;
    }
  }

  @media screen and (max-width: 992px) {
    .footer-title {
      .main {
        font-size: 5rem;
      }
      .sub {
        font-size: 6rem;

        margin-top: 3rem;
      }

      p {
        font-size: 6rem;

        margin-top: 4rem;
      }
    }

    .top-button-box {
      transform: scale(0.9);
    }
  }

  @media screen and (max-width: 767px) {
    height: auto;
    padding: 4rem 0;

    .footer-title {
      .main {
        font-size: 3rem;
      }
      .sub {
        font-size: 5rem;
      }

      p {
        font-size: 4rem;
      }
    }

    .top-button-box {
      transform: scale(0.7);
    }
  }

  @media screen and (max-width: 599px) {
    /* 모바일 세로 */

    height: auto;
    padding: 4rem 0;

    .footer-title {
      .main {
        font-size: 2rem;
      }
      .sub {
        font-size: 3rem;

        margin-top: 1rem;
      }

      p {
        font-size: 4rem;

        margin-top: 3rem;
      }
    }

    .top-button-box {
      transform: scale(0.6);
    }
  }
`;
