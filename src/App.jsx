import React from "react";
import Header from "./component/Header/Header";
import Carousel from "./component/Content/Carousel";
import Popular from "./component/Popular/Popular";
import Viewproduct from "./component/Viewproducts/Viewproduct";
import Productreview from "./component/Viewproducts/Productreview";
import Govee from "./component/Govee/Govee";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="relative">
      <Header />
      <Carousel />
      <Popular />
      <Viewproduct />
      <Productreview />
      <Govee />
      <Footer />
    </div>
  );
}

export default App;
