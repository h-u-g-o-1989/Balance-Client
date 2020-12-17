import React from "react";
import { Switch } from "react-router-dom";
import LoadingComponent from "./components/Loading";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import LogIn from "./pages/LogIn";
import ProtectedHome from "./pages/ProtectedHome";
import ProtectedUpload from "./pages/ProtectedUpload";
import ProtectedDay from "./pages/ProtectedDay";
import ProtectedMonthly from "./pages/ProtectedMonthly";
import ProtectedResources from "./pages/ProtectedResources";
import ProtectedAbout from "./pages/ProtectedAbout";
import Signup from "./pages/Signup";
import NormalRoute from "./routing-components/NormalRoute";
import ProtectedRoute from "./routing-components/ProtectedRoute";
import Edit from "./pages/Edit";
import { getLoggedIn, logout } from "./services/auth";
import * as PATHS from "./utils/paths";

class App extends React.Component {
  state = {
    user: null,
    isLoading: true,
  };

  componentDidMount = () => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      return this.setState({
        isLoading: false,
      });
    }
    getLoggedIn(accessToken).then((res) => {
      if (!res.status) {
        console.log("RES IN CASE OF FAILURE", res);
        // deal with failed backend call
        localStorage.removeItem("accessToken");
        return this.setState({
          isLoading: false,
          user: null,
        });
      }
      this.setState({
        user: res.data.user,
        isLoading: false,
      });
    });
  };

  handleLogout = () => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      return this.setState({
        user: null,
        isLoading: false,
      });
    }
    this.setState(
      {
        isLoading: true,
      },
      () => {
        logout(accessToken).then((res) => {
          if (!res.status) {
            // deal with error here
            console.log("SOMETHING HAPPENED", res);
          }

          localStorage.removeItem("accessToken");
          return this.setState({
            isLoading: false,
            user: null,
          });
        });
      }
    );
  };

  authenticate = (user) => {
    this.setState({
      user,
    });
  };

  render() {
    if (this.state.isLoading) {
      return <LoadingComponent />;
    }

    return (
      <div
        className="App"
        style={{
          backgroundImage: "url(/chevron.png)",
          backgroundRepeat: "repeat",
        }}
      >
        <Navbar handleLogout={this.handleLogout} user={this.state.user} />
        <Switch>
          <NormalRoute exact path={PATHS.HOMEPAGE} component={HomePage} />
          <NormalRoute
            exact
            path={PATHS.SIGNUPPAGE}
            authenticate={this.authenticate}
            component={Signup}
          />
          <NormalRoute
            exact
            path={PATHS.LOGINPAGE}
            authenticate={this.authenticate}
            component={LogIn}
          />
          <ProtectedRoute
            exact
            path={PATHS.PROTECTEDHOME}
            component={ProtectedHome}
            user={this.state.user}
          />
          <ProtectedRoute
            exact
            path={PATHS.PROTECTEDUPLOAD}
            component={ProtectedUpload}
            user={this.state.user}
          />
          <ProtectedRoute
            exact
            path={PATHS.PROTECTEDDAY}
            component={ProtectedDay}
            user={this.state.user}
          />
          <ProtectedRoute
            exact
            path={PATHS.PROTECTEDMONTHLY}
            component={ProtectedMonthly}
            user={this.state.user}
          />
          <ProtectedRoute
            exact
            path={PATHS.PROTECTEDRESOURCES}
            component={ProtectedResources}
            user={this.state.user}
          />
          <ProtectedRoute
            exact
            path={PATHS.PROTECTEDABOUT}
            authenticate={this.authenticate}
            component={ProtectedAbout}
            user={this.state.user}
          />
          <ProtectedRoute
            exact
            path={PATHS.EDIT}
            component={Edit}
            user={this.state.user}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
