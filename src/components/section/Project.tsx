import styled from "styled-components";
import { motion } from "framer-motion";
import { PROJECT } from "../../constants/project";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface project {
  id: number;
  title: string;
  day: string;
  content?: string;
  subContent?: string;
}

const Project = () => {
  let content = <></>;

  const changeContent = (project: project) => {
    if (project.id === 1) {
      content = (
        <>
          <p className="content">
            <span className="strong-text">
              {project.content?.substring(0, 18)}
            </span>
            {project.content?.substring(18)}
          </p>
          <div className="sub-content-box">
            <p className="sub-content">
              <span className="accent-text">
                {project.subContent?.substring(0, 8)}
              </span>
              {project.subContent?.substring(8)}
            </p>
          </div>
        </>
      );
    } else if (project.id === 2) {
      content = (
        <>
          <p className="content">
            <span className="strong-text">
              {project.content?.substring(0, 20)}
            </span>
            {project.content?.substring(20)}
          </p>
          <div className="sub-content-box">
            <p className="sub-content">
              {project.subContent?.substring(0, 5)}
              <span className="accent-text">
                {project.subContent?.substring(5, 9)}
              </span>
              {project.subContent?.substring(9, 60)}
              <span className="accent-text">
                {project.subContent?.substring(60, 65)}
              </span>
              {project.subContent?.substring(65, 86)}
              <span className="accent-text">
                {project.subContent?.substring(86, 93)}
              </span>
              {project.subContent?.substring(93)}
            </p>
          </div>
        </>
      );
    } else if (project.id === 3) {
      content = (
        <>
          <p className="content">
            <span className="strong-text">
              {project.content?.substring(0, 22)}
            </span>
            {project.content?.substring(22)}
          </p>
          <div className="sub-content-box">
            <p className="sub-content">
              {project.subContent?.substring(0, 43)}
              <span className="accent-text">
                {project.subContent?.substring(43, 65)}
              </span>
              {project.subContent?.substring(65)}
            </p>
          </div>
        </>
      );
    }
    return content;
  };

  return (
    <ProjectContainer id="project">
      <p className="project-title">PROJECT</p>
      {PROJECT.map((project, index) => (
        <ProjectBox
          key={project.title}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            type: "spring",
            duration: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          <div className="title-box">
            <h1 className="title">{project.title}</h1>
            <span>{project.day}</span>
          </div>
          <div className="text-box">
            {changeContent(project)}
            <div className="info-box">
              {project.info?.map(({ infoTitle, infoContent }) => (
                <div key={infoTitle} className="info-wrap">
                  <div className="info-title">{infoTitle}</div>
                  <div className="info-content">
                    {infoTitle === "URL" ? (
                      <a href={infoContent}>{infoContent}</a>
                    ) : (
                      <p>{infoContent}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="image-box">
            <Swiper
              pagination={{
                type: "fraction",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              loop={true}
            >
              {project.images.map((imageUrl, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={require(`../../assets/images/project/${imageUrl}`)}
                    alt=""
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </ProjectBox>
      ))}
    </ProjectContainer>
  );
};

export default Project;

const ProjectContainer = styled.section`
  background-color: white;
  width: 100%;
  height: auto;

  padding: 180px 20px 125px;

  position: relative;

  .project-title {
    color: #3a3a3a;

    font-size: 1.5rem;
    font-family: "Spoqa Han Sans Neo", "sans-serif";
    font-weight: 700;

    position: absolute;
    top: 50px;
    left: 50%;

    transform: translate(-50%);
  }

  @media screen and (max-width: 767px) {
    padding: 150px 20px 25px;

    .project-title {
      font-size: 1rem;
    }
  }
`;

const ProjectBox = styled(motion.div)`
  width: 800px;
  height: auto;

  max-width: 800px;

  margin: 1rem auto 4rem auto;
  padding: 2rem;

  display: flex;
  flex-direction: column;

  opacity: 0;

  border-radius: 20px;
  box-shadow: rgba(149, 160, 165, 0.5) 0px 8px 24px;
  overflow: hidden;

  transition: 0.3s;

  .title-box {
    width: 100%;

    display: flex;
    flex-direction: row;

    align-items: end;

    .title {
      color: #3a3a3a;

      font-size: 2rem;
      font-family: "SBAggroB";
      font-weight: 500;
    }

    & span {
      color: #999;

      margin-bottom: 3px;
      margin-left: 1rem;
    }
  }
  @media screen and (max-width: 620px) {
    /* 모바일 세로 */

    .title-box {
      flex-direction: column;

      align-items: center;

      & span {
        color: #999;

        margin-top: 15px;
      }
    }
  }
  .accent-text {
    color: #f37272;
    font-weight: bolder;
  }

  .strong-text {
    font-weight: bolder;
  }

  .text-box {
    width: 100%;
    height: 100%;

    padding: 2rem 0 0;

    white-space: pre-line;

    .content {
      font-size: 1.2rem;

      color: #3a3a3a;

      word-break: keep-all;
      line-height: 1.5;
    }

    .sub-content-box {
      margin-top: 2rem;

      .sub-content {
        font-size: 1.2rem;

        color: #3a3a3a;

        word-break: keep-all;
        line-height: 1.5;
      }
    }

    .info-box {
      width: 100%;
      height: auto;

      margin-top: 2rem;
      padding: 2rem 0 1rem;

      border-top: 1px solid #ccc;
      
      .info-wrap {
        margin-bottom: 1rem;

        .info-title {
          width: 8rem;
          vertical-align: top;

          font-size: 1rem;
          font-weight: 900;

          display: inline-block;

          &::before {
            //background-image: linear-gradient(90deg, #95DAC1, #fffd7f);
            content: "✔";
            display: inline;
            padding-right: 0.5rem;
            color: #00dfa2;
          }
        }

        .info-content {
          vertical-align: bottom;

          font-weight: 400;
          font-size: 1rem;

          display: inline-block;

          & a {
            color: #1e9acb;
          }
        }
      }
    }
  }
  @media screen and (max-width: 899px) {
    /* 모바일 가로, 타블렛 세로 */
    width: 100%;
  }
  @media screen and (max-width: 620px) {
    /* 모바일 세로 */
    .text-box {
      .content {
        text-align: center;
      }
      .sub-content {
        text-align: center;
      }

      .info-wrap {
        display: flex;
        flex-direction: column;

        .info-title {
          display: block;
        }

        .info-content {
          margin-top: 0.8rem;
          display: block;
        }
      }
    }
  }

  .image-box {
    width: 100%;
    height: 100%;

    & img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .swiper {
      height: 100%;

      &-wrapper,
      &-container {
        margin: 0;
        padding: 0;
      }

      .swiper-button-prev,
      .swiper-button-next {
        width: 30px;
        height: 30px;

        color: white;
        background-color: #00000033;

        border-radius: 50%;

        top: 45%;
      }

      .swiper-button-prev::after,
      .swiper-button-next::after {
        --swiper-navigation-size: 10px;
      }

      .swiper-pagination {
        margin-top: 1rem;

        position: relative;
      }
    }
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }

  @media screen and (max-width: 620px) {
    /* 모바일 세로 */
    .title {
      font-size: 1rem;
    }
  }
`;
