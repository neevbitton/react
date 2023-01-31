import { useState } from "react";
import axios from "axios";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import registerSchema from "../../validation/registerValidation";
import "./registertBiz.css";

const RegisterBizPage = () => {
  const [name, setName] = useState("");
  // const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPasswordErrorMsg, setShowPasswordErrorMsg] = useState(false);
  const[emailExist, setEmailExist] = useState(false);
  const history = useHistory();

  const handleNameChange = (ev) => {
    setName(ev.target.value);
  };
  const handleEmailChange = (ev) => {
    setEmail(ev.target.value);
  };
  const handlePasswordChange = (ev) => {
    setPassword(ev.target.value);
  };
  const handleConfirmPassword = (ev) => {
    setConfirmPassword(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    setShowPasswordErrorMsg(password !== confirmPassword);
    const validatedValue = Joi.validate(
      { email, password, confirmPassword, name },
      registerSchema,
      {
        abortEarly: false,
      }
    );
    const { error } = validatedValue;

    if (error) {
      for (let item of error.details) {
        toast.error(item.message.replaceAll('"', ""));
      }
    } else {
      if (password === confirmPassword) {
        axios
          .post("/users", {
            name: name,
            email: email,
            password: password,
            biz: true,
          })
          .then((res) => {
            console.log(res.data);
            history.push("/login", { email: email, password: password, biz: true});
          })
          .catch((err) => {
            console.log("err from axios", err);
            if(err.response.data.message === "email already exist");
            setEmailExist(true);
          });
      }
    }
  };

  return (
    <div className="container d-flex justify-content-center">
    <form className="row media media-100" onSubmit={handleSubmit}>
         <h1>Business Registration Form</h1>
        <h3>If you are a business owner and need our service, you are welcome to open a new user for free!</h3>
      <div className="mb-3">
        <label htmlFor="exampleInputName1" className="form-label">
          Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputName1"
          aria-describedby="emailHelp"
          value={name}
          onChange={handleNameChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email:
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password:
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      {password.length < 8 && (
        <div className="alert alert-warning" role="alert">
          The password must contain at least 8 characters!
        </div>
      )}
      <div className="mb-3">
        <label htmlFor="exampleInputConfirmPassword1" className="form-label">
          Confirm Password:
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputConfirmPassword1"
          value={confirmPassword}
          onChange={handleConfirmPassword}
        />
      </div>
      {showPasswordErrorMsg && (
        <div className="alert alert-danger" role="alert">
          The password and confirm password must be the same
        </div>
      )}
      {emailExist && (
        <div className="alert alert-danger" role="alert">
          Email Already Exist
        </div>
      )}
    
      <button type="submit" className="btn btn-dark">
        Next
      </button>
    </form>
    </div>
  );
};

export default RegisterBizPage;