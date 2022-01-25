import "bootstrap/dist/css/bootstrap.min.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Offers from "./components/Offers";
import Heading from "./components/Heading";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import data from "./data/data.json";
import NavOptions from "./components/NavOptions";
import StarProduct from "./components/StarProduct";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu";
import HotAccessories from "./components/HotAccessories";
import ProductReviews from "./components/ProductReviews";
import Videos from "./components/Video";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

function App() {
  const {
    banner,
    miPhones,
    redmiPhones,
    tv,
    laptop,
    fitnessAndLifeStyle,
    home,
    audio,
    accessories,
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
      <Routes>
        <Route path="/miphones" element={<NavOptions miPhones={miPhones} />} />
        <Route
          path="/redmiphones"
          element={<NavOptions redmiPhones={redmiPhones} />}
        />
        <Route path="/tv" element={<NavOptions tv={tv} />} />
        <Route path="/laptops" element={<NavOptions laptop={laptop} />} />
        <Route
          path="/lifestyle"
          element={<NavOptions fitnessAndLifeStyle={fitnessAndLifeStyle} />}
        />
        <Route path="/home" element={<NavOptions home={home} />} />
        <Route path="/audio" element={<NavOptions audio={audio} />} />
        <Route
          path="/accessories"
          element={<NavOptions accessories={accessories} />}
        />
      </Routes>
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
