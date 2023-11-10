import InputMask from "react-input-mask";
import Base from "../Base";
import { Button, FormContainer, FormItem } from "./styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

import SuccessPage from "../../Components/SuccessPage";

const Form = () => {
  const [formValid, setFormValid] = useState(false);
  const [showSuccessPage, setShowSuccessPage] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
      month: "",
      year: "",
      cvc: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Can't be blank"),
      number: Yup.string()
        .min(16, "16 numbers required")
        .required("Can't be blank"),
      month: Yup.string()
        .min(2, "2 numbers required")
        .required("Can't be blank"),
      year: Yup.string()
        .min(2, "2 numbers required")
        .required("Can't be blank"),
      cvc: Yup.string().min(3, "3 numbers required").required("Can't be blank"),
    }),
    onSubmit: (val) => {
      console.log(val);
    },
  });

  const handleInputCvc = (e) => {
    const newValue = e.target.value.replace(/[^\d]/g, "").slice(0, 3);

    formik.handleChange({
      target: { id: "cvc", value: newValue },
    });
  };
  const handleInputMonth = (e) => {
    const newValue = e.target.value.replace(/[^\d]/g, "").slice(0, 2);

    formik.handleChange({
      target: { id: "month", value: newValue },
    });
  };
  const handleInputYear = (e) => {
    const newValue = e.target.value.replace(/[^\d]/g, "").slice(0, 2);

    formik.handleChange({
      target: { id: "year", value: newValue },
    });
  };
  const handleInputNumber = (e) => {
    const newValue = e.target.value.replace(/[^\d]/g, "").slice(0, 16);

    formik.handleChange({
      target: { id: "number", value: newValue },
    });
  };

  const checkErrorInput = (campo) => {
    const invalid = campo in formik.errors;
    const touched = campo in formik.touched;
    const hasError = invalid && touched;

    return hasError;
  };

  const checkFormValid = () => {
    if (
      "name" in formik.errors ||
      "number" in formik.errors ||
      "month" in formik.errors ||
      "year" in formik.errors ||
      "cvc" in formik.errors
    ) {
      return;
    }
    setFormValid(true);
    setShowSuccessPage(true);
  };

  const goBack = () => {
    setShowSuccessPage(false);
    formik.values.name = "";
    formik.values.number = "";
    formik.values.cvc = "";
    formik.values.month = "";
    formik.values.year = "";
  };

  return (
    <>
      <Base
        name={formik.values.name ? formik.values.name : "Your name"}
        number={
          formik.values.number ? formik.values.number : "0000 0000 0000 0000"
        }
        month={formik.values.month ? formik.values.month : "00"}
        year={formik.values.year ? formik.values.year : "00"}
        cvc={formik.values.cvc ? formik.values.cvc : "000"}
      >
        {showSuccessPage ? (
          <SuccessPage goBack={goBack} />
        ) : (
          <FormContainer formValid={formValid}>
            <form onSubmit={formik.handleSubmit}>
              <FormItem>
                <label htmlFor="name">Cardholder Name</label>
                <input
                  type="text"
                  id="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  className={checkErrorInput("name") ? "invalid" : ""}
                />
                {checkErrorInput("name") ? <p>Can&rsquo;t be blank</p> : ""}
              </FormItem>
              <FormItem>
                <label htmlFor="number">Card number</label>
                <InputMask
                  type="text"
                  id="number"
                  onChange={handleInputNumber}
                  onBlur={formik.handleBlur}
                  value={formik.values.number}
                  mask="9999 9999 9999 9999"
                  className={checkErrorInput("number") ? "invalid" : ""}
                />
                {checkErrorInput("number") ? <p>16 numbers required</p> : ""}
              </FormItem>
              <FormItem className="flex">
                <div>
                  <label htmlFor="expDate">Exp. Date (MM/YY)</label>
                  <InputMask
                    type="text"
                    id="expDate"
                    placeholder="MM"
                    onChange={handleInputMonth}
                    onBlur={formik.handleBlur}
                    value={formik.values.month}
                    mask="99"
                    className={checkErrorInput("month") ? "invalid" : ""}
                  />
                  <InputMask
                    type="text"
                    id="expDate"
                    placeholder="YY"
                    onChange={handleInputYear}
                    onBlur={formik.handleBlur}
                    value={formik.values.year}
                    mask="99"
                    className={checkErrorInput("year") ? "invalid" : ""}
                  />
                  {checkErrorInput("year") || checkErrorInput("month") ? (
                    <p>2 numbers required</p>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <label htmlFor="cvc">CVC</label>
                  <InputMask
                    type="number"
                    id="cvc"
                    onChange={handleInputCvc}
                    onBlur={formik.handleBlur}
                    value={formik.values.cvc}
                    className={checkErrorInput("cvc") ? "invalid" : ""}
                  />
                  {checkErrorInput("cvc") ? <p>3 numbers required</p> : ""}
                </div>
              </FormItem>
              <Button type="submit" onClick={checkFormValid}>
                Confirm
              </Button>
            </form>
          </FormContainer>
        )}
      </Base>
    </>
  );
};

export default Form;
