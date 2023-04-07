import React, { useState, useEffect } from "react";

// useTitle
import useTitle from "../hooks/useTitle";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { validate } from "./Validate";
import { nofity } from "./Notification";

import "../assets/css/singup.css";

const SignUp = () => {
  useTitle("ثبت نام");

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  const changeHandler = (e) => {
    if (e.target.name === "isAccepted") {
      setData({ ...data, [e.target.name]: e.target.checked });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
    console.log(data);
  };

  const focusHandler = (e) => {
    setTouched({
      ...touched,
      [e.target.name]: true,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!Object.keys(errors).length) {
      console.log(data);
      nofity("ثبت نام با موفقیت انجام شد", "success");
    } else {
      nofity("اطلاعات نامعتبر است", "error");
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
    }
  };

  useEffect(() => {
    setErrors(validate(data));
  }, [data, touched]);

  return (
    <div className="container">
      <form onSubmit={submitHandler} className="formContainer">
        <h1 className="header">ثبت نام</h1>
        <div className="formField">
          <label>نام و نام خانوادگی</label>
          <input
            className={
              errors.name && touched.name ? "uncompleted" : "formInput"
            }
            type="text"
            name="name"
            value={data.name}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.name && touched.name && <span>{errors.name}</span>}
        </div>

        <div className="formField">
          <label>ایمیل</label>
          <input
            className={
              errors.email && touched.email ? "uncompleted" : "formInput"
            }
            type="text"
            name="email"
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.email && touched.email && <span>{errors.email}</span>}
        </div>

        <div className="formField">
          <label>پسوورد</label>
          <input
            className={
              errors.password && touched.password ? "uncompleted" : "formInput"
            }
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.password && touched.password && (
            <span>{errors.password}</span>
          )}
        </div>

        <div className="formField">
          <label>تکرار پسوورد</label>
          <input
            className={
              errors.confirmPassword && touched.confirmPassword
                ? "uncompleted"
                : "formInput"
            }
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <span>{errors.confirmPassword}</span>
          )}
        </div>

        <div className="formField">
          <div className="checkBoxContainer">
            <input
              type="checkbox"
              name="isAccepted"
              value={data.isAccepted}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
            <label>تایید قوانین و مقررات سایت</label>
          </div>
          {errors.isAccepted && touched.isAccepted && (
            <span>{errors.isAccepted}</span>
          )}
        </div>

        <div className="formButtons">
          <button type="submit">ثبت نام</button>
          <a href="#">ورود</a>
        </div>
      </form>

      <ToastContainer rtl />
    </div>
  );
};

export default SignUp;
