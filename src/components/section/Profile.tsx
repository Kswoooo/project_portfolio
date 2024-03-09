import styled from "styled-components";
import Skill from "./Skill";

import { PROFILE } from "../../constants/profile";

const Profile = () => {
  return (
    <ProfileContainer id="profile">
      <ProfileInner>
        <p className="profile-title">PROFILE</p>
        <ProfileTextWrap>
            <p className="title">안녕하세요!</p>
            <p className="title">
              저는 <span className="name">김성우</span> 입니다!
            </p>
        </ProfileTextWrap>
        <ProfileContentWrap>
          <div className="left">
            {PROFILE.map(({ icon, type, content }) => (
              <ProfileItemBox key={type}>
                <span>{icon}</span>
                <div className="item-content">
                  <p>{content}</p>
                </div>
              </ProfileItemBox>
            ))}
          </div>
          <div className="right">
            <img src={require(`../../assets/images/me.jpeg`)} alt="이미지" />
          </div>
        </ProfileContentWrap>
        <Skill />
      </ProfileInner>
    </ProfileContainer>
  );
};

export default Profile;

const ProfileContainer = styled.section`
  width: 100%;
  height: auto;
`;

const ProfileInner = styled.div`
  width: 100%;
  height: 100%;

  padding: 180px 245px 125px;

  position: relative;

  .profile-title {
    color: #3a3a3a;

    font-size: 1.5rem;
    font-family: "Spoqa Han Sans Neo", "sans-serif";
    font-weight: 700;

    position: absolute;
    top: 50px;
    left: 50%;

    transform: translate(-50%);
  }

  @media screen and (max-width: 1449px) {
    /* 타블렛 가로 */

    padding: 180px 50px 125px;
  }

  @media screen and (max-width: 1199px) {
    /* 타블렛 가로 */

    padding: 180px 30px 125px;
  }

  @media screen and (max-width: 992px) {
    padding: 150px 20px 125px;
  }

  @media screen and (max-width: 767px) {
    padding: 150px 10px 125px;

    .profile-title {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 599px) {
    /* 모바일 세로 */
    padding: 150px 10px 30px;
  }
`;

const ProfileTextWrap = styled.div`

    .title {
      color: #3a3a3a;

      font-family: "SBAggroB";
      font-size: 3rem;

      text-align: center;

      &:first-child {
        margin-bottom: 1rem;
      }

      .name {
        color: #00dfa2;

        font-size: 3.5rem;
      }
    }

  @media screen and (max-width: 599px) {
    /* 모바일 세로 */

    .title {
      font-size: 2.5rem;
      .name {
        font-size: 3rem;
      }
    }
  }
`;

const ProfileContentWrap = styled.div`
  margin-top: 6rem;

  width: 100%;
  height: auto;

  display: flex;
  flex-direction: row;
  justify-content: center;

  .left {
    width: 40%;
    gap: 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .right {
    width: 40%;

    position: relative;

    img {
      width: 60%;

      display: block;

      position: absolute;
      left: 50%;
      bottom: 0%;

      transform: translate(-50%);
    }
  }

  @media screen and (max-width: 992px) {
    .left {
      width: 60%;
    }

    .right {
      img {
        width: 80%;
      }
    }
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;

    .left {
      order: 2;

      width: 100%;
    }

    .right {
      order: 1;
      width: 80%;
      height: 500px;
      position: sticky;

      img {
        width: 60%;
        margin-bottom: 3rem;
      }
    }
  }

  @media screen and (max-width: 599px) {
    /* 모바일 세로 */
    .right {
      order: 1;
      width: 80%;
      height: 300px;
      position: sticky;
    }
  }
`;

const ProfileItemBox = styled.div`
  width: 85%;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 50px;
    height: 50px;

    font-size: 2rem;
  }

  .item-content {
    background-color: white;
    color: #3a3a3a;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 420px;
    height: 80px;

    transform: scale(0.9);

    box-shadow: 5px 5px 10px 1px#ddd;

    //border-radius: 15px;
    border-radius: 50px;

    p {
      font-family: "SBAggroB";
      font-size: 1.3rem;
    }
  }

  @media screen and (max-width: 767px) {
    width: 100%;

    justify-content: center;
  }
`;
