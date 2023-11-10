import styled from "styled-components";
import cardFront from "../../assets/Images/card-front.png";
import cardBack from "../../assets/Images/card-back.png";
import colors from "../../Styles/colors";
import bgImage from "../../assets/Images/main-desktop.png";
import bgImageMobile from "../../assets/Images/main-mobile.png";

export const MainContainer = styled.div`
  display: flex;
  max-height: 100vh;
  height: 100%;

  @media (max-width: 768px) {
    display: block;
    position: relative;
  }
`;

export const BgImage = styled.div`
  background-image: url(${bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 450px;
  height: 100vh;

  @media (max-width: 768px) {
    background-image: url(${bgImageMobile});
    width: 100%;
    height: 200px;
    margin-bottom: 100px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 300px;
  width: 100%;
`;

export const CardContainer = styled.div`
  position: fixed;
  z-index: 2;
  top: 15%;
  left: 150px;
  height: 500px;
  width: 500px;

  @media (max-width: 768px) {
    position: absolute;
    height: 200px;
    width: 350px;
    top: 0;
    left: 0;
  }
`;

export const CardFront = styled.div`
  background-image: url(${cardFront});
  background-repeat: no-repeat;
  background-position: center;
  width: 420px;
  height: 230px;
  border-radius: 8px;
  position: absolute;
  top: 0%;
  left: 0%;
  box-shadow: 1px 1px 15px #363636;

  @media (max-width: 768px) {
    height: 160px;
    width: 280px;
    left: 15px;
    top: 120px;
    z-index: 1;
  }

  > div {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 25px;
    color: ${colors.white};

    img {
      position: absolute;
      top: 20px;

      @media (max-width: 768px) {
        height: 30px;
      }
    }

    > div {
      position: absolute;
      bottom: 24px;
      width: 85%;

      .number {
        font-size: 24px;
        display: block;
        text-align: center;
        letter-spacing: 3px;

        @media (max-width: 768px) {
          font-size: 15px;
        }
      }

      .flex {
        display: flex;
        justify-content: space-between;
        margin-top: 18px;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 14px;

        @media (max-width: 768px) {
          font-size: 12px;
        }
      }
    }
  }
`;

export const CardBack = styled.div`
  background-image: url(${cardBack});
  background-repeat: no-repeat;
  background-position: center;
  width: 420px;
  height: 230px;
  border-radius: 8px;
  position: absolute;
  bottom: 0;
  right: 0;
  box-shadow: 1px 1px 15px #363636;

  @media (max-width: 768px) {
    height: 160px;
    width: 280px;
    top: 20px;
    right: 0;
  }

  > div {
    position: relative;

    span {
      position: absolute;
      right: 38px;
      top: 102px;
      color: ${colors.white};
      letter-spacing: 2px;

      @media (max-width: 768px) {
        right: 25px;
        top: 70px;
        font-size: 12px;
      }
    }
  }
`;
