import styled from "styled-components";
import colors from "../../Styles/colors";

export const SuccessContainer = styled.div`
  text-align: center;

  h2 {
    margin: 24px 0 16px;
    text-transform: uppercase;
    font-weight: normal;
  }
`;

export const Button = styled.button`
  padding: 8px;
  border: none;
  border-radius: 8px;
  background-color: ${colors.darkViolet};
  color: ${colors.white};
  width: 300px;
  font-size: 14px;
  margin-top: 32px;
  cursor: pointer;
`;
