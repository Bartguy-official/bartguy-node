import React from "react";
//import "materialize-css/dist/css/materialize.min.css";

function Header(props) {
  const inputStyle = {
    width: "230px",
    height: "40px",
    border: "2px #999999 solid",
  };

  const checkoutStyle = {
    fontFamily: "Cabin, sans-serif",
    marginLeft: "50px",
  };

  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-3 col-xs-12">
              <div className="header_left floatleft">
                <form
                  method="get"
                  action="/products/search"
                  name="searchForm"
                  id="searchForm"
                >
                  <input
                    type="text"
                    name="q"                    
                    placeholder="SEARCH"
                    onSubmit={submitSearch}
                    style={inputStyle}
                  />
                </form>
              </div>
            </div>
            <div className="col-md-6 col-sm-5 col-xs-12">
              <div className="header_center">
                <a href="/">
                  <img src="assets/img/bartguy_logo.png" alt="Bartguy Logo" />
                </a>
              </div>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-12">
              <div className="header_right floatright">
                <ul className="checkout" style={checkoutStyle}>
                  <li>
                    <a href="/users/login">Login</a>
                  </li>
                  <li>|</li>
                  <li>
                    <a href="/users/register">Register</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function submitSearch() {
  document.getElementById("searchForm").submit();
}

export default Header;
