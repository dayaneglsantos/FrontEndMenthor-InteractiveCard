import styled from "styled-components";
import colors from "../../Styles/colors";

export const FormContainer = styled.div`
  display: flex;

  .flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    #cvc {
      width: 100%;
    }

    > div {
      input {
        width: 40%;
        margin-right: 10px;
      }
    }
  }
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  label {
    text-transform: uppercase;
    margin-bottom: 8px;
    font-size: 14px;
    display: block;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }

  input {
    padding: 8px;
    font-size: 14px;
    border-radius: 8px;
    border: 1px solid ${colors.violet};

    &:focus {
      outline: 1px solid ${colors.darkViolet};
    }

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }

  .invalid {
    border: 1px solid ${colors.red};
  }

  p {
    color: ${colors.red};
    font-size: 12px;
    margin-top: 4px;
  }
`;

export const Button = styled.button`
  padding: 8px;
  border: none;
  border-radius: 8px;
  background-color: ${colors.darkViolet};
  color: ${colors.white};
  width: 100%;
  font-size: 14px;
  margin-top: 16px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-top: 0px;
  }
`;
