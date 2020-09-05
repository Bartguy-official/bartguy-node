import React from "react";

function HomePromotion(props) {
  return (
    <div className="call_to_action_area">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="call_to_action">
              <div className="row">
                <div className="col-md-3 col-sm-3 col-xs-12">
                  <div className="single_call_action">
                    <img src="/img/phone.png" />
                    <p>
                      Contact
                      <br />
                      info@bartguy.com
                    </p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-12">
                  <div className="single_call_action">
                    <img src="assets/img/world.png" />
                    <p>
                      Worldwide <br />
                      connections
                    </p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-12">
                  <div className="single_call_action">
                    <img src="assets/img/discount.png" />
                    <p>
                      Auto offers on
                      <br />
                      all products
                    </p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-12">
                  <div className="single_call_action last_single_call">
                    <img src="assets/img/return.png" />
                    <p>Joys of Barter System</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePromotion;
