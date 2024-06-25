import PageOne from "./pages/PageOne";
import "./homePage.style.css";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";

const HomePage = () => {
  return (
    <div className="homePageHolder">
      <PageOne />
      <PageTwo />
      <PageThree />
    </div>
  );
};

export default HomePage;
