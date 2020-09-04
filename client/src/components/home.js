import React from "react";
import HomeSlider from "./home_slider";
import HomePromotion from "./home_promotion";
import UploadProduct from "./upload_product";

function Home(props) {
  return (
    <div>
      <HomeSlider></HomeSlider>
      <HomePromotion></HomePromotion>
      <UploadProduct></UploadProduct>
    </div>
  );
}

export default Home;
