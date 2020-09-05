import React from "react";
import "./App.css";
import Header from "./components/header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/login";
import Menu from "./components/menu";
import Home from "./components/home";
import Footer from "./components/footer";

function App() {
  return (
    <div className="root">
      <Header></Header>
      <Menu></Menu>
      <Router>
        <div>
          <Route path="/users/login" exact component={Login}></Route>
          <Route path="/" component={Home}></Route>
        </div>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
