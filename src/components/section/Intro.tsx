import styled from "styled-components";

// react icons import
import { BsChevronDoubleDown } from "react-icons/bs";

const ScrollDown = () => {
  return (
    <ScrollContainer>
      <p className="scroll-text">Scroll Down</p>
      <BsChevronDoubleDown className="scroll-icon" size="30" color="white" />
    </ScrollContainer>
  );
};

const Intro = () => {
  return (
    <IntroContainer id="home">
      <IntroWrap>
        <p className="intro-title">PORT FOLIO</p>
        <ContentBox>
          <p className="strong">My dream is</p>
          <p className="color-strong">Developer!</p>
        </ContentBox>
      </IntroWrap>
      <ScrollDown />
    </IntroContainer>
  );
};

export default Intro;

const IntroContainer = styled.section`
  background-color: #3a3a3a;

  position: relative;

  width: 100%;
  height: 100vh;
`;

const IntroWrap = styled.div`
  background-color: #3a3a3a;

  width: 100%;
  height: 100%;

  padding: 0 20px;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .intro-title {
    color: white;

    font-size: 1.5rem;
    font-family: "Spoqa Han Sans Neo", "sans-serif";
    font-weight: 700;

    position: absolute;
    top: 150px;
    left: 50%;

    transform: translate(-50%);

    margin-bottom: 4rem;
  }

  @media screen and (max-width: 767px) {
    .intro-title {
      font-size: 1rem;
      top: 120px;
    }
  }
`;

const ContentBox = styled.div`
  width: 100%;
  height: 450px;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: "SBAggroB";

  .strong {
    color: white;

    font-size: 7rem;

    margin-bottom: 4rem;
  }

  .color-strong {
    color: #00dfa2;

    font-size: 10rem;
    font-weight: bold;
  }

  @media screen and (max-width: 1199px) {
    /* 타블렛 가로 */
    .strong {
      font-size: 5rem;
    }

    .color-strong {
      font-size: 8rem;
    }
  }

  @media screen and (max-width: 992px) {
    .strong {
      font-size: 4rem;
    }

    .color-strong {
      font-size: 6.5rem;
    }
  }

  @media screen and (max-width: 899px) {
    /* 모바일 가로, 타블렛 세로 */
  }

  @media screen and (max-width: 767px) {
    .strong {
      font-size: 3.5rem;
    }

    .color-strong {
      font-size: 5.5rem;
    }
  }

  @media screen and (max-width: 599px) {
    /* 모바일 세로 */
    .strong {
      font-size: 2rem;
    }

    .color-strong {
      font-size: 3rem;
    }
  }
`;

const ScrollContainer = styled.div`
  position: absolute;
  bottom: 2%;
  left: 50%;

  transform: translate(-50%);

  width: 200px;
  height: 70px;

  animation: scrollUpDown 0.8s ease-in-out infinite alternate;

  @keyframes scrollUpDown {
    from {
      bottom: 2%;
    }
    to {
      bottom: 0.5%;
    }
  }

  .scroll-text {
    color: white;

    text-align: center;

    font-size: 1.1rem;
    font-weight: 700;
  }

  .scroll-icon {
    text-align: center;

    position: absolute;
    top: 30%;
    left: 50%;

    transform: translate(-50%);
  }

  @media screen and (max-width: 992px) {
    .scroll-text {
      font-size: 0.8rem;
      font-weight: 700;
    }
  }
`;
