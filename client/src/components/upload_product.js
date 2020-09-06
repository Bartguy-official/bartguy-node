import React from "react";
import Countries from './home/countries';

function UploadProduct(props) {

  return (
    <div>
      <link rel="stylesheet" href="/css/jqcloud.scss" />
      <section className="checkout_area">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-sm-8 col-xs-12">
              <div className="checkout_left">
                <h2>Upload Product</h2>
                <div className="dotted_line" />
                <div className="checkout_form">
                  <div className="c_address">
                    <p>
                      Product Name <span>*</span>
                      <span
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          display: "none",
                        }}
                        id="name_rule"
                      >
                        {" "}
                        (please provide the name of product)
                      </span>
                    </p>
                    <input
                      type="text"
                      placeholder="Product Name *"
                      id="product_name"
                      defaultValue
                      required
                      name="product_name"
                    />
                  </div>
                  {/*?php
                  if (empty($user)) {
                      ?*/}
                  <div className="company_name">
                    <p>
                      Email Address<span>*</span>
                      <span
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          display: "none",
                        }}
                        id="email_rule"
                      >
                        {" "}
                        (please provide your email id)
                      </span>
                    </p>
                    <input
                      type="text"
                      placeholder="Email *"
                      id="email"
                      defaultValue
                      required
                      name="email"
                    />
                  </div>
                  {/*?php
                  }
                  ?*/}
                  <div className="country_select">
                    <p>
                      Category *
                      <span
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          display: "none",
                        }}
                        id="category_rule"
                      >
                        {" "}
                        (please choose a category)
                      </span>
                    </p>
                    <select
                      name="category"
                      id="product_category"
                      className="selectpicker sel_state"
                    >
                      <option value>Choose Category</option>
                      {/*?php
                          if (!empty($categories)) {
                              foreach ($categories as $cat) {
                                  ?*/}
                      <option value="<?php echo $cat['Category']['id']; ?>">
                        {/*?php echo $cat['Category']['name']; ?*/}
                      </option>
                      {/*?php
                              }
                          }
                          ?*/}
                    </select>
                  </div>
                  <div className="c_address">
                    <p>
                      Interested In<span>*</span>
                      <span
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          display: "none",
                        }}
                        id="email_rule"
                      >
                        {" "}
                        (please write at-least one requirement)
                      </span>
                    </p>
                    <input
                      type="text"
                      placeholder="Interested in *"
                      id="interested_in"
                      defaultValue
                      required
                      name="interested_in"
                      readOnly="readnly"
                    />
                    <div
                      id="cloud_tags"
                      className="demo jqcloud"
                      style={{ height: 200 }}
                    ></div>
                  </div>
                  <div className="country_select">
                    <p>
                      Country *
                      <span
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          display: "none",
                        }}
                        id="country_rule"
                      >
                        {" "}
                        (please choose the country)
                      </span>
                    </p>
                    <Countries></Countries>
                  </div>
                  <div className="country_select">
                    <p>
                      State *
                      <span
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          display: "none",
                        }}
                        id="state_rule"
                      >
                        {" "}
                        (please choose the state)
                      </span>
                    </p>
                    <select
                      name="state_id"
                      id="product_state"
                      className="form-control sel_state"
                      onChange={populateCities}
                    >
                      <option value>Choose State</option>
                    </select>
                  </div>
                  <div className="country_select">
                    <p>
                      City *
                      <span
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          display: "none",
                        }}
                        id="city_rule"
                      >
                        {" "}
                        (please choose the city)
                      </span>
                    </p>
                    <select
                      name="city_id"
                      id="product_city"
                      style={{ color: "#999999" }}
                      className="form-control sel_state"
                    >
                      <option value>Choose City</option>
                    </select>
                  </div>
                  <div className="country_select">
                    <p>How Old</p>
                    <select
                      name="oldness"
                      id="product_oldness"
                      className="selectpicker sel_state"
                    >
                      <option value>How old is the product</option>
                      {/*?php
                          if (!empty($oldness)) {
                              foreach ($oldness as $k =*/}{" "}
                      $old) {"{"}
                      ?&gt;
                      <option value="<?php echo $k; ?>">
                        {/*?php echo $old; ?*/}
                      </option>
                      {/*?php
                              }
                          }
                          ?*/}
                    </select>
                  </div>
                  <div className="s_order">
                    <p>
                      Product Images <span>*</span>
                      <span
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          display: "none",
                        }}
                        id="image_rule"
                      >
                        {" "}
                        (please upload images)
                      </span>
                    </p>
                    <form action="/upload/images" className="dropzone">
                      <div className="fallback">
                        <input name="file" type="file" multiple />
                      </div>
                    </form>
                  </div>
                  <div className="s_order">
                    <p>
                      Product Description <span>(optional)</span>
                      <span
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          display: "none",
                        }}
                        id="description_rule"
                      >
                        {" "}
                        (please write at least 50 words)
                      </span>
                    </p>
                    <textarea
                      name="description"
                      id="product_description"
                      cols={30}
                      rows={10}
                      defaultValue={""}
                    />
                  </div>
                  <div className="company_name submit_btn form-group submitRow">
                    <input
                      type="button"
                      name="submit"
                      defaultValue="Upload"
                      onClick={uploadProducts}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function uploadProducts() {}


function populateCities() {}

export default UploadProduct;
