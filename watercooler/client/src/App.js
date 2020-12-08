import React from "react";
import Header from "./components/Header";
import Route from "./components/Route";
import About from "./components/Pages/About";
import Forum from "./components/Pages/Forum";
import SignIn from "./components/Pages/SignIn";
import SignUp from "./components/Pages/SignUp";
import Dashboard from "./components/Pages/Dashboard";
import UserProvider from "./providers/UserProvider";

const App = () => {
  //Set state for rendering comments //remember to import it

  return (
    <div>
      <UserProvider>
        <Header />
        <Route path="/">
          <About />
        </Route>
        <Route path="/Forum">
          <Forum />
        </Route>
        <Route path="/CompanyForum">
          <Forum from="company" />
        </Route>
        <Route path="/LocationForum">
          <Forum from="location" />
        </Route>
        <Route path="/SignIn">
          <SignIn />
        </Route>
        <Route path="/SignUp">
          <SignUp />
        </Route>
        <Route path="/Dashboard">
          <Dashboard />
        </Route>
      </UserProvider>
    </div>
  );
};

export default App;
