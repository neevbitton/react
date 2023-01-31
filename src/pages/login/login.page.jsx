import { useState, useEffect } from "react";
import axios from "axios";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import { useHistory, useLocation } from "react-router-dom";

import loginSchema from "../../validation/loginValidation";

import useAfterLogin from "../../hooks/useAfterLogin";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show_Err_Msg, setShowErrMsg] = useState(false);




  
  const history = useHistory();
  const location = useLocation();

  const afterLogin = useAfterLogin();

  useEffect(() => {
    console.log("location", location);
    if (location.state && location.state.email && location.state.password) {
      setEmail(location.state.email);
      setPassword(location.state.password);
  
    }
  
  }, []);


  useEffect(() => {
    if (
      email !== "" &&
      password !== "" &&
      location.state &&
      location.state.email &&
      location.state.password
    ) {
      handleSubmit();
    }
  }, [email, password]);

  const handleEmailChange = (ev) => {
    setEmail(ev.target.value);
  };
  const handlePasswordChange = (ev) => {
    setPassword(ev.target.value);
  };
  const handleSubmit = (ev) => {
    if (ev) ev.preventDefault();
    const validatedValue = Joi.validate({ email, password }, loginSchema, {
      abortEarly: false,
    });
    const { error } = validatedValue;
    if (error) {
     
      toast.error(`"invalid email and/or password"`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      axios
        .post("/auth", {
          email,
          password,
        })
        .then(({ data }) => {
          console.log("data", data);
        
          afterLogin(data.token);

          if(data.biz){
            history.push("/createbizcard")
          }else{
            history.push("/"); 
          }
          
          
        })
        .catch((err) => {
          console.log(err);
          setShowErrMsg(true);

    
        });
    }
  };
  return (

    <div className="container d-flex justify-content-center">
    <form className="row media media-100" onSubmit={handleSubmit}>
      <h1 className="text-center">Login</h1>
      <h2 className="text-center">
If you have an existing private or business user, login!</h2>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={email}
          onChange={handleEmailChange}
        />
        <div id="emailHelp" className="form-text">
          {email}
        </div>
        {!email && (
          <div id="emailHelp" className="form-text">
            please provied your email
          </div>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={password}
          onChange={handlePasswordChange}
        />
        <div className="position-relative">
          {password.length < 6 && (
            <div id="emailHelp" className="form-text">
              Please provide password with at least 8 characters
            </div>
          )}
        </div>
        {show_Err_Msg && (
        <div className="alert alert-danger" role="alert">
          Email or Password is incorrect
        </div>
      )}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
    </div>
  );
};

export default LoginPage;