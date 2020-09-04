import React from "react";
//import styled from "styled-components";
import { useEffect } from "react";

function HomeSlider(props) {
  useEffect(() => {
      console.log('kj jh j gjh');
    const script = document.createElement("script");
    script.src = "assets/js/rs-plugin/rs.home.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div>
        {/* HOME SLIDER */}
        <div className="slider-wrap">
          <div className="fullwidthbanner-container">
            <div className="fullwidthbanner">
              <ul>
                <li
                  data-transition="random"
                  data-slotamount={7}
                  data-masterspeed={1000}
                >
                  <img src="assets/img/slider1.jpg" alt="barter system" />
                  <div
                    className="tp-caption large_black sfr home_slider"
                    data-x={120}
                    data-y={160}
                    data-speed={1100}
                    data-start={1100}
                    data-easing="easeInOutBack"
                    style={{
                      fontSize: 70,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      color: "#212121",
                      fontFamily: "cabin",
                      textShadow: "0px 0px 3px #000",
                    }}
                  >
                    Barter System
                  </div>
                  <div
                    className="tp-caption large_black sfr home_slider"
                    data-x={120}
                    data-y={230}
                    data-speed={1100}
                    data-start={1400}
                    data-easing="easeInOutBack"
                    style={{
                      fontFamily: '"Montserrat", sans-serif',
                      fontSize: 40,
                      fontWeight: 700,
                      lineHeight: 80,
                      textTransform: "uppercase",
                      color: "#212121",
                      textShadow: "0 0 3px #fff",
                    }}
                  >
                    Redesigned for Future
                  </div>
                  <div
                    className="tp-caption large_black sfr carousel-caption-inner"
                    data-x={120}
                    data-y={280}
                    data-speed={1100}
                    data-start={1400}
                    data-easing="easeInOutBack"
                    style={{}}
                  >
                    <img src="assets/images/sep-b2.png" />
                  </div>
                  <div
                    className="tp-caption large_black sfl carousel-caption-inner"
                    data-x={120}
                    data-y={370}
                    data-speed={1300}
                    data-start={1700}
                    data-easing="easeInOutBack"
                    style={{
                      fontFamily: "cabin Sans",
                      fontSize: 30,
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      color: "#FF6766",
                      border: "2px solid #ff6766",
                      padding: "10px 20px",
                    }}
                  >
                    <a href="/all-products" style={{ color: "#ff6766" }}>
                      Discover Products
                    </a>
                  </div>
                </li>
                <li
                  data-transition="random"
                  data-slotamount={7}
                  data-masterspeed={1000}
                >
                  <img
                    src="assets/img/slider2.jpg"
                    alt="barter sharing is caring"
                  />
                  <div
                    className="tp-caption large_black sfr home_slider"
                    data-x={120}
                    data-y={160}
                    data-speed={1100}
                    data-start={1100}
                    data-easing="easeInOutBack"
                    style={{
                      fontSize: 70,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      color: "#FFFFFF",
                      fontFamily: "cabin",
                      textShadow: "0px 0px 3px #000",
                    }}
                  >
                    Barter System
                  </div>
                  <div
                    className="tp-caption large_black sfr home_slider"
                    data-x={120}
                    data-y={230}
                    data-speed={1100}
                    data-start={1400}
                    data-easing="easeInOutBack"
                    style={{
                      fontFamily: '"Montserrat", sans-serif',
                      fontSize: 40,
                      fontWeight: 700,
                      lineHeight: 80,
                      textTransform: "uppercase",
                      color: "#212121",
                      textShadow: "0 0 3px #fff",
                    }}
                  >
                    Sharing is caring
                  </div>
                  <div
                    className="tp-caption large_black sfr carousel-caption-inner"
                    data-x={120}
                    data-y={280}
                    data-speed={1100}
                    data-start={1400}
                    data-easing="easeInOutBack"
                    style={{}}
                  >
                    <img src="assets/images/sep-b2.png" />
                  </div>
                  <div
                    className="tp-caption large_black sfl carousel-caption-inner"
                    data-x={120}
                    data-y={370}
                    data-speed={1300}
                    data-start={1700}
                    data-easing="easeInOutBack"
                    style={{
                      fontFamily: "cabin Sans",
                      fontSize: 30,
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      color: "#232323",
                      border: "2px solid #ff6766",
                      padding: "10px 20px",
                    }}
                  >
                    <a href="/all-products">Checkout Products</a>
                  </div>
                </li>
                <li
                  data-transition="random"
                  data-slotamount={7}
                  data-masterspeed={1000}
                >
                  <img src="assets/img/slider3.jpg" alt="barter exchange" />
                  <div
                    className="tp-caption large_black sfr home_slider"
                    data-x={120}
                    data-y={160}
                    data-speed={1100}
                    data-start={1100}
                    data-easing="easeInOutBack"
                    style={{
                      fontSize: 70,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      color: "#FFFFFF",
                      fontFamily: "cabin",
                      textShadow: "0px 0px 3px #000",
                    }}
                  >
                    Barter System
                  </div>
                  <div
                    className="tp-caption large_black sfr"
                    data-x={120}
                    data-y={230}
                    data-speed={1100}
                    data-start={1400}
                    data-easing="easeInOutBack"
                    style={{
                      fontFamily: '"Montserrat", sans-serif',
                      fontSize: 40,
                      fontWeight: 700,
                      lineHeight: 80,
                      textTransform: "uppercase",
                      color: "#212121",
                      textShadow: "0 0 3px #fff",
                    }}
                  >
                    Get products without spending a penny
                  </div>
                  <div
                    className="tp-caption large_black sfr carousel-caption-inner"
                    data-x={120}
                    data-y={280}
                    data-speed={1100}
                    data-start={1400}
                    data-easing="easeInOutBack"
                    style={{}}
                  >
                    <img src="assets/images/sep-b2.png" />
                  </div>
                  <div
                    className="tp-caption large_black sfl carousel-caption-inner"
                    data-x={120}
                    data-y={370}
                    data-speed={1300}
                    data-start={1700}
                    data-easing="easeInOutBack"
                    style={{
                      fontFamily: "cabin Sans",
                      fontSize: 30,
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      color: "#232323",
                      border: "2px solid #ff6766",
                      padding: "10px 20px",
                    }}
                  >
                    <a href="/all-products">discover collection</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              "\n    .home_slider {\n        font-size: 16px;\n        font-size: 4vw;\n    }\n",
          }}
        />
      </div>
    </div>
  );
}

export default HomeSlider;
