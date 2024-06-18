import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "../src/festures/Navigation/Navigation";
import HomePage from "./festures/HomePage/HomePage";

const App = () => {
  return (
    <div className="projectHolder">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
