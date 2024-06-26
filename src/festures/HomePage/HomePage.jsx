import PageOne from "./pages/PageOne";
import "./homePage.style.css";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import PageFour from "./pages/PageFour";
import PageFive from "./pages/PageFive";

const HomePage = () => {
  return (
    <div className="homePageHolder">
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour />
      <PageFive />
    </div>
  );
};

export default HomePage;
