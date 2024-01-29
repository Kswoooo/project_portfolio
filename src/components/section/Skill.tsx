import styled from "styled-components";
import { SKILLS } from "../../constants/skills";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";

import { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";

const Skill = () => {
  const [swiperIndex, setSwiperIndex] = useState(0);

  return (
    <SkillContainer>
      <p className="skill-title">SKILLS</p>
      <div className="guide-box">
        <span className="guide">옆으로 밀어주세요!</span>
      </div>
      <Swiper
        className="swiper"
        spaceBetween={0}
        centeredSlides={true}
        slidesPerView={3}
        navigation={true}
        modules={[Navigation]}
        onSlideChange={(e: SwiperClass) => setSwiperIndex(e.activeIndex)}
      >
        {SKILLS.map((skill, index) => (
          <SwiperSlide
            key={skill.name}
            className={
              index === swiperIndex
                ? "slide-container active"
                : "slide-container"
            }
          >
            <div className="item-wrap">
              <img src={require(`../../assets/images/skills/${skill.icon}`)} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <p className="skill-name">{SKILLS[swiperIndex].title}</p>
    </SkillContainer>
  );
};

export default Skill;

const SkillContainer = styled.section`
  width: 100%;

  padding: 10rem 0 5rem;

  position: relative;

  .skill-title {
    color: #3a3a3a;

    font-size: 1.5rem;
    font-family: "Spoqa Han Sans Neo", "sans-serif";
    font-weight: 700;

    position: absolute;
    top: 100px;
    left: 50%;

    transform: translate(-50%);
  }

  .guide-box {
    text-align: center;
    .guide {
      background-color: #00dfa2;
      color: white;

      font-size: 0.8rem;
      font-family: "Spoqa Han Sans Neo", "sans-serif";
      font-weight: 700;

      padding: 10px;

      border-radius: 50px;
    }
  }

  .skill-name {
    color: #00dfa2;

    font-family: "SBAggroB";
    font-size: 1.5rem;

    margin-top: 2rem;

    text-align: center;
  }

  // slide CSS
  .swiper {
    width: 80%;

    margin-top: 3rem;

    &-button-next,
    &-button-prev {
      color: #3a3a3a;
    }
  }

  .active {
    transform: scale(1.2);

    transition: all 0.5s;
  }

  .slide-container {
    width: 150px;
    height: 200px;

    display: flex;

    align-items: center;
    justify-content: center;

    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;

    .item-wrap {
      background-color: white;

      width: 200px;
      height: 150px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 20px;

      box-shadow: 5px 5px 10px 1px#ddd;

      img {
        width: 90%;
        height: 90%;
        display: block;

        object-fit: contain;
        object-position: 50% 50%;
        scale: 0.8;

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
        user-drag: none;
      }
    }
  }

  @media screen and (max-width: 992px) {
    .swiper {
      width: 100%;
    }

    .slide-container {
      .item-wrap {
        width: 150px;
        height: 150px;
      }
    }
  }

  @media screen and (max-width: 899px) {
    /* 모바일 가로, 타블렛 세로 */

    .swiper {
      width: 100%;
    }
  }

  @media screen and (max-width: 767px) {

    padding: 10rem 0 3rem;

    .skill-title {
      font-size: 1rem;
    }

    .slide-container {
      .item-wrap {
        width: 100px;
        height: 100px;
      }
    }
  }

  @media screen and (max-width: 599px) {
    /* 모바일 세로 */

    padding: 10rem 0 5rem;

    .swiper {
      &-button-next,
      &-button-prev {
        display: none;
      }
    }
  }
`;
