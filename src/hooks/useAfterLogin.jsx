import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import jwt_decode from "jwt-decode";

const useAfterLogin = () => {
  const dispatch = useDispatch();
  return (token) => {
    localStorage.setItem("token", token);
    dispatch(authActions.login()); 
    dispatch(authActions.updateUserData(jwt_decode(token)));
  };
};

export default useAfterLogin;
