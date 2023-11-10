import {
  BgImage,
  CardBack,
  CardContainer,
  CardFront,
  Content,
  MainContainer,
} from "./styles";
import P from "prop-types";

import cardLogo from "../../assets/Images/card-logo.svg";

const Base = ({ children, name, cvc, number, month, year }) => {
  const formatedNumber = (number) => {
    const cleanNumber = number.replace(/[^\d]/g, "");
    const formattedNumber = cleanNumber.replace(/(\d{4})/g, "$1 ");

    return formattedNumber;
  };

  return (
    <MainContainer>
      <BgImage />
      <CardContainer>
        <CardFront>
          <div>
            <img src={cardLogo} alt="Card Logo" />
            <div>
              <span className="number">{formatedNumber(number)}</span>
              <div className="flex">
                <span>{name}</span>
                <span>
                  {month} / {year}
                </span>
              </div>
            </div>
          </div>
        </CardFront>
        <CardBack>
          <div>
            <span>{cvc}</span>
          </div>
        </CardBack>
      </CardContainer>

      <Content>{children}</Content>
    </MainContainer>
  );
};

export default Base;

Base.propTypes = {
  children: P.element,
  name: P.string,
  number: P.string,
  month: P.string,
  year: P.string,
  cvc: P.string,
};
