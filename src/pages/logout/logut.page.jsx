import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
import { useHistory } from "react-router-dom";

const LogoutPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(authActions.logout()); //clear redux
    localStorage.clear(); //clear logal storage
    history.push("/");
  }, []);

  return <Fragment></Fragment>;
};
export default LogoutPage;
