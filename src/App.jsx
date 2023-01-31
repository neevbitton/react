
import './App.css';
import{ToastContainer} from "react-toastify";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/navbar.component";
import About from './pages/about/about.page';
import Home from './pages/home/home.page';
import Footer from './components/footer/footer.component';
import RegisterUserPage from './pages/registerUser/registaerUser.page';
import RegisterBizPage from './pages/registerBiz/registerBiz.page';
import LoginPage from './pages/login/login.page';
import LogoutPage from './pages/logout/logut.page';
import AuthGuardRoute from './components/authGuardRoute/authGuardRoute.component';
import CreateBizCardPage from './pages/creatbizcard/creatbizcard.page';
import DashboardPage from './pages/dashboard/dashboard.page';
import { Fragment } from 'react';


function App() {
  return (
    <Fragment>
      <Navbar/>
      <ToastContainer/>
      <Switch>
      <Route path="/" exact>
         <Home/>
        </Route>
        <Route path="/about" exact>
         <About/>
        </Route>
        <Route path="/register-user" exact>
         <RegisterUserPage/>
        </Route>
        <Route path="/register-biz" exact>
         <RegisterBizPage/>
        </Route>
        <Route path="/login" exact>
         <LoginPage/>
        </Route>
        <Route path="/logout" exact>
         <LogoutPage/>
        </Route>
        <AuthGuardRoute
          path="/createbizcard"
          component={CreateBizCardPage}
        ></AuthGuardRoute>
         <AuthGuardRoute
          path="/dashboard"
          component={DashboardPage}
        ></AuthGuardRoute>
        </Switch>
     <Footer/>
    </Fragment>
  );
}

export default App;
