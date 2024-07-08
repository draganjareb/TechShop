import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "../src/festures/Navigation/Navigation";
import HomePage from "./festures/HomePage/HomePage";
import Offer from "./festures/Offer/Offer";
import Cart from "./festures/Cart/Cart";
import Partners from "./festures/Partners/Partners";
import About from "./festures/About/About";
import Contact from "./festures/Contact/Contact";
import Mobile from "./festures/Offer/components/mobile/Mobile";
import Laptop from "./festures/Offer/components/laptop/Laptop";
import TV from "./festures/Offer/components/TV/TV";
import Tablets from "./festures/Offer/components/tablets/Tablets";
import HEadphone from "./festures/Offer/components/headphone/Headphone";

const App = () => {
  return (
    <div className="projectHolder">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/offer/mobile" element={<Mobile />} />
          <Route path="/offer/laptop" element={<Laptop />} />
          <Route path="/offer/tv" element={<TV />} />
          <Route path="/offer/tablets" element={<Tablets />} />
          <Route path="/offer/headphone" element={<HEadphone />} />
          {/* <Route path="/offer/mobile/all" element={<PhoneOffer />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
