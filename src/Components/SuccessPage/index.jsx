import { Button, SuccessContainer } from "./styles";
import successImg from "../../assets/Images/icon-complete.svg";
import P from "prop-types";

const SuccessPage = ({ goBack }) => {
  return (
    <SuccessContainer>
      <img src={successImg} alt="Success icon" />
      <h2>Thank You!</h2>
      <p>We&rsquo;ve added your card details</p>
      <Button onClick={goBack}>Continue</Button>
    </SuccessContainer>
  );
};

export default SuccessPage;

SuccessPage.propTypes = {
  goBack: P.func,
};
