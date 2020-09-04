import React from "react";

function Menu(props) {
  return (
    <section className="nav_area">
  <div className="container">
    <div className="nav_left floatleft">
      <a href="/all-products">
        All Products
        <i className="fa fa-bars" />
      </a>
      <div className="cat_mega_menu">
        <div className="cat_left">
          <h5>Essential Items</h5>
          <div className="cat_menu_line" />
          <ul className="cat_nav">
            <li>
              <a href="/c/ddd">Lkjnkjnk</a>
            </li>
          </ul>
        </div>
        <div className="cat_middle">
          <h5>Electronics</h5>
          <div className="cat_menu_line" />
          <ul className="cat_nav">
            <li>
              <a href="/c/<?php echo $k; ?>">kKKkkkKKk</a>
            </li>
          </ul>
        </div>
        <div className="cat_middle">
          <h5>Clothing</h5>
          <div className="cat_menu_line" />
          <ul className="cat_nav">
            <li>
              <a href="/c/<?php echo $k; ?>">G jhgjhg HJ gj</a>
            </li>
          </ul>
        </div>
        <div className="cat_middle_right">
          <h5>Other</h5>
          <div className="cat_menu_line" />
          <ul className="cat_nav">
            <li>
              <a href="/c/<?php echo $k; ?>">Hgh hv f</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="nav_center">
      <nav className="mainmenu">
        <ul id="nav">
          <li className="current-page-item">
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/how-it-works">How it works</a>
          </li>
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms-and-conditions">Terms &amp; Conditions</a>
          </li>
        </ul>
      </nav>
    </div>
    <div className="nav_right floatright">
      <a href="/upload/product">Upload Product</a>
    </div>
    <div className="only-for-mobile">
      <ul className="ofm">
        <li className="m_nav">
          <i className="fa fa-bars" /> Navigation
        </li>
      </ul>
      <div className="mobi-menu">
        <div id="cssmenu">
          <ul>
            <li>
              <a href="/">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="/all-products">
                <span>All Products</span>
              </a>
            </li>
            <li>
              <a href="/about-us">
                <span>About Us</span>
              </a>
            </li>
            <li>
              <a href="/privacy-policy">
                <span>Privacy Policy</span>
              </a>
            </li>
            <li>
              <a href="/terms-and-conditions">
                <span>Terms &amp; Conditions</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}

export default Menu;
