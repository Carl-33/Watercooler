import React, { Component } from "react";
import Header from "./components/Header";
// import Route from "./components/Route";
import About from "./components/Pages/About";
import Forum from "./components/Pages/Forum";
import SignIn from "./components/Pages/SignIn";
import SignUp from "./components/Pages/SignUp";
import Dashboard from "./components/Pages/Dashboard";
import UserProvider from "./providers/UserProvider";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  //Set state for rendering comments //remember to import it

  return (
    <Router>
      <div>
      <UserProvider>
        <Header />
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
        <Route exact path="/">
          <About />
        </Route>
      </UserProvider>
    </div>
    </Router>
  );
};

export default App;
