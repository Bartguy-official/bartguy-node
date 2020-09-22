import React from "react";
import "./App.css";
import Header from "./components/header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/login";
import Menu from "./components/menu";
import Home from "./components/home";
import Footer from "./components/footer";
import Register from "./components/register";
import UploadProduct from "./components/upload_product";
import Pages from "./containers/pages";

function App() {
  return (
    <div className="root">
      <Header></Header>
      <Menu></Menu>
      <Router>
        <div>
          <Route path="/users/login" exact component={Login}></Route>
          <Route path="/users/register" exact component={Register}></Route>
          <Route path="/upload/product" component={UploadProduct}></Route>
          <Route
            path={["/how-it-works", "/privacy-policy", "/terms-and-conditions"]}
            component={Pages}
          ></Route>
          <Route path="/" exact component={Home}></Route>
        </div>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
