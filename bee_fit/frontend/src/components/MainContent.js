import React from "react";
import { Switch, Route } from "react-router-dom";
import RequireAuth from "./auth/RequireAuth";
import Home from "./layout/Home";
import Login from "./auth/Login";
import Logout from "./auth/Logout";
import Signup from "./auth/Signup";
import SignupDone from "./auth/SignupDone";
import Activation from "./auth/Activation";
import UserProfile from "./auth/UserProfile";
import UserProfileEdit from "./auth/UserProfileEdit";
import PasswordChange from "./auth/PasswordChange";
import PasswordReset from "./auth/PasswordReset";
import PasswordResetDone from "./auth/PasswordResetDone";
import PasswordResetConfirm from "./auth/PasswordResetConfirm";
import Search from "./Products/Search"
import Fitness from "./layout/FitnessPage";

const MainContent = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Route path="/signup" component={Signup} />
      <Route path="/account/confirm-email/:key" component={Activation} />
      <Route path="/signup_done" component={SignupDone} />
      <Route path="/reset_password" component={PasswordReset} />
      <Route path="/reset_password_done" component={PasswordResetDone} />
      <Route path="/reset/:uid/:token/" component={PasswordResetConfirm} />
      <Route path="/profile" component={RequireAuth(UserProfile)} />
      <Route path="/profile_edit" component={RequireAuth(UserProfileEdit)} />
      <Route path="/change_password" component={RequireAuth(PasswordChange)} />
      <Route path="/fitness" component={Fitness} />
      <Route path="/allproducts" component ={Search} />
    </Switch>
  </div>
);

export default MainContent;
