import React from "react";
import Header from "./components/Header";
import Route from "./components/Route";
import About from "./components/Pages/About";
import Forum from "./components/Pages/Forum";
import SignIn from "./components/Pages/SignIn";
import SignUp from "./components/Pages/SignUp";
import Dashboard from "./components/Pages/Dashboard";

const App = () => {
  return (
    <div>
      <Header />
      <Route path="/">
        <About />
      </Route>
      <Route path="/Forum">
        <Forum />
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
    </div>
  );
};

export default App;
