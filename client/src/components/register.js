import React from "react";

function Register() {
  return (
    <>
      <div class="breadcumb_area">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="bread_box">
                <ul class="breadcumb">
                  <li>
                    <a href="/users/login">
                      Login<span>|</span>
                    </a>
                  </li>
                  <li class="active">
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
                <h2>Register</h2>
                <div class="dotted_line"></div>
                <div class="checkout_form">
                  <div class="company_name">
                    <div class="text-center social-btn">
                      <a
                        href="/users/login/facebook"
                        class="btn btn-primary btn-block"
                      >
                        <i class="fa fa-facebook"></i> Sign up with{" "}
                        <b>Facebook</b>
                      </a>
                      <a
                        href="/users/login/google"
                        class="btn btn-danger btn-block"
                      >
                        <i class="fa fa-google"></i> Sign up with <b>Google</b>
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
export default Register;
