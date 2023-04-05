import React, { useState, useEffect } from "react";

import { validate } from "./Validate";

const SignUp = () => {
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

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors(validate(data));
    console.log(errors);
  }, [data]);

  return (
    <div>
      <h1>singup</h1>
      <form>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label>Confirm password</label>
          <input
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label>I accept terms of privacy policy</label>
          <input
            type="checkbox"
            name="isAccepted"
            value={data.isAccepted}
            onChange={changeHandler}
          />
        </div>

        <div>
          <a href="">Login</a>
          <button type="submit">Sing Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
