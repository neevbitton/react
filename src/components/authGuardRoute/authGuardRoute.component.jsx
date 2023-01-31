import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthGuardRoute = ({ component: Page, ...rest }) => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  return (
    <Route
      {...rest}
      render={(props) =>
        loggedIn ? <Page {...props} /> : <Redirect to="/login" />
      }
    ></Route>
  );
};
export default AuthGuardRoute;
