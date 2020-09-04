import React from "react";

function Footer(props) {
  return (
    <footer className="entire_footer_area">
      <div className="footer_top_area">
        <div className="container">
          <div className="row"></div>
        </div>
      </div>
      <div className="footer_area">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-3 col-xs-12">
              <div className="single_widget">
                <h5>information</h5>
                <div className="wid_line" />
                <ul className="widget_nav">
                  <li>
                    <a href="/all-products">All Products</a>
                  </li>
                  <li>
                    <a href="/how-it-works">How it Works</a>
                  </li>
                  <li>
                    <a href="/privacy-policy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/terms-and-conditions">Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-12">
              <div className="single_widget">
                <h5>my account</h5>
                <div className="wid_line" />
                <ul className="widget_nav">
                  <li>
                    <a href="/account">My Account</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-12">
              <div className="single_widget">
                <h5>customer service</h5>
                <div className="wid_line" />
                <ul className="widget_nav">
                  <li>
                    <a href="/contact">Help &amp; Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-12">
              <div className="single_widget">
                <h5>contact Info</h5>
                <div className="wid_line" />
                <address>Email : info@bartguy.com</address>
                <ul className="wid_social">
                  <li>
                    <a
                      className="fa fa-facebook"
                      href="https://www.facebook.com/bartguyy"
                      target="_blank"
                    />
                  </li>
                  {/*
                      <li><a class="fa fa-twitter" href=""></a></li>
                      <li><a class="fa fa-google-plus" href=""></a></li>
                      <li><a class="fa fa-pinterest" href=""></a></li>
                      <li><a class="fa fa-rss" href=""></a></li>
                      */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom_area">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="footer_bottom">
                <p>
                  Copyright © 2020 <a href="/">BartGuy</a>. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
