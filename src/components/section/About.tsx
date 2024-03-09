import styled from "styled-components";

import { ABOUT } from "../../constants/about";

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutInner>
        <p className="about-title">ABOUT ME</p>
        <AboutTextBox>
          <p className="title">끝까지 간다</p>
          <p className="text">요령은 있어도, 대충은 없다.</p>
          <p className="sub-text m-top font">"집요한 개발자"</p>
          <AboutContentBox>
            {ABOUT.map(({ src, content, subContent }) => (
              <AboutItemBox key={subContent}>
                <img className="img" src={require(`../../assets/images/about/${src}`)} alt=""/>
                <p className="item-text">{content}</p>
                <p className="item-sub-text">{subContent}</p>
              </AboutItemBox>
            ))}
          </AboutContentBox>
        </AboutTextBox>
      </AboutInner>
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.section`
  width: 100%;
  height: auto;
`;

const AboutInner = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;

  padding: 180px 245px 125px;

  position: relative;

  .about-title {
    color: #3a3a3a;

    font-size: 1.5rem;
    font-family: "Spoqa Han Sans Neo", "sans-serif";
    font-weight: 700;

    position: absolute;
    top: 50px;
    left: 50%;

    transform: translate(-50%);
  }

  @media screen and (max-width: 1282px) {
    /* 타블렛 가로 */
    padding: 180px 100px 125px;
  }

  @media screen and (max-width: 1199px) {
    /* 타블렛 가로 */
    padding: 180px 100px 125px;
  }

  @media screen and (max-width: 992px) {
    padding: 180px 50px 125px;
  }
  @media screen and (max-width: 899px) {
    /* 모바일 가로, 타블렛 세로 */
    padding: 150px 50px 85px;
  }

  @media screen and (max-width: 767px) {
    padding: 150px 50px 85px;

    .about-title {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 599px) {
    /* 모바일 세로 */
    padding: 150px 10px 0px;
  }
`;

const AboutTextBox = styled.div`
  .title {
    color: #3a3a3a;

    font-family: "Giants-Bold";
    font-size: 7rem;
    font-weight: 100;
    font-style: oblique;

    text-align: center;

    margin-bottom: 2rem;
  }

  .text {
    color: #00000064;

    font-family: "SBAggroB";
    font-size: 1.2rem;

    text-align: center;
  }

  .sub-text {
    color: #55c6a8;

    font-family: "SBAggroB";
    font-size: 1.7rem;

    text-align: center;

    margin-top: 0.5rem;
  }

  @media screen and (max-width: 992px) {
    .title {
      font-size: 5rem;
    }

    .text {
      font-size: 1rem;
    }

    .sub-text {
      font-size: 1.4rem;
    }
  }

  @media screen and (max-width: 767px) {
    .title {
      font-size: 5rem;
    }

    .text {
      font-size: 1rem;
    }

    .sub-text {
      font-size: 1.4rem;
    }
  }

  @media screen and (max-width: 599px) {
    .title {
      font-size: 4rem;
    }

    .text {
      font-size: 0.8rem;
    }

    .sub-text {
      font-size: 1.1rem;
    }
  }
`;

const AboutContentBox = styled.div`
  margin-top: 7rem;

  display: flex;

  flex-direction: row wrap;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 899px) {
    margin-top: 5rem;
  }

  @media screen and (max-width: 599px) {
    /* 모바일 세로 */
    margin-top: 2rem;
  }
`;

const AboutItemBox = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 300px;
  height: 300px;

  .img {
    width: 60%;
    margin-bottom: 2rem;
  }

  .item-text {
    color: #3a3a3a;

    font-family: "SBAggroB";
    font-size: 1.5rem;

    margin-bottom: 1rem;
  }

  .item-sub-text {
    color: #3a3a3a;

    font-family: "SBAggroB";
    font-size: 2rem;
  }

  @media screen and (max-width: 992px) {

    .item-text {
      font-size: 1.3rem;
    }

    .item-sub-text {
      font-size: 1.8rem;
    }
  }

  @media screen and (max-width: 767px) {
    .img {
      font-size: 6rem;
    }

    .item-text {
      font-size: 1.2rem;
    }

    .item-sub-text {
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 599px) {
    .img {
      font-size: 4rem;
    }

    .item-text {
      font-size: 0.7rem;
    }

    .item-sub-text {
      font-size: 0.9rem;
    }
  }
`;
