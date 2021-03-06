import React from "react";

function Login() {
  return (
    <>
      <div class="breadcumb_area">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="bread_box">
                <ul class="breadcumb">
                  <li class="active">
                    <a href="/users/login">
                      Login<span>|</span>
                    </a>
                  </li>
                  <li>
                    <a href="/users/register">Register</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="checkout_area">
        <div class="container">
          <div class="row">
            <div class="col-md-9 col-sm-8 col-xs-12">
              <div class="checkout_left">
                <h2>Login</h2>
                <div class="dotted_line"></div>
                <div class="checkout_form">
                  <div class="company_name">
                    <div class="text-center social-btn">
                      <a
                        href="/users/login/facebook"
                        class="btn btn-primary btn-block"
                      >
                        <i class="fa fa-facebook"></i> Sign in with{" "}
                        <b>Facebook</b>
                      </a>
                      <a
                        href="/users/login/facebook"
                        class="btn btn-danger btn-block"
                      >
                        <i class="fa fa-google"></i> Sign in with <b>Google</b>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
