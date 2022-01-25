import "bootstrap/dist/css/bootstrap.min.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Offers from "./components/Offers";
import Heading from "./components/Heading";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import data from "./data/data.json";
import StarProduct from "./components/StarProduct";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu";
import HotAccessories from "./components/HotAccessories";
import ProductReviews from "./components/ProductReviews";
import Videos from "./components/Video";
import Banner from "./components/Banner.js";
import Footer from "./components/Footer.js";

function App() {
  const {
    banner,
    offer,
    starProduct,
    hotAccessories,
    hotAccessoriesCover,
    productReviews,
    videos,
    footer,
  } = data;
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start={banner.start} />
      <Offers offer={offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct startProduct={starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Routes>
        <Route
          path="/music"
          element={
            <HotAccessories
              music={hotAccessories.music}
              musicCover={hotAccessoriesCover.music}
            />
          }
        />
        <Route
          path="/smartDevices"
          element={
            <HotAccessories
              smartDevice={hotAccessories.smartDevice}
              smartDeviceCover={hotAccessoriesCover.smartDevice}
            />
          }
        />
        <Route
          path="/home"
          element={
            <HotAccessories
              home={hotAccessories.home}
              homeCover={hotAccessoriesCover.home}
            />
          }
        />
        <Route
          path="/lifestyle"
          element={
            <HotAccessories
              lifeStyle={hotAccessories.lifeStyle}
              lifeStyleCover={hotAccessoriesCover.lifeStyle}
            />
          }
        />
        <Route
          path="/mobileAccessories"
          element={
            <HotAccessories
              mobileAccessories={hotAccessories.mobileAccessories}
              mobileAccessoriesCover={hotAccessoriesCover.mobileAccessories}
            />
          }
        />
      </Routes>
      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={productReviews} />
      <Heading text="VIDEOS" />
      <Videos videos={videos} />
      <Heading text="IN THE PRESS" />
      <Banner banner={banner.end} />
      <Footer footer={footer} />
    </Router>
  );
}

export default App;
