import { About } from "./Layouts/About";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";

const AboutApp = () => {
  return (
    <div className="container">
      <Header />
      <About />
      <Footer />
    </div>
  );
};

export default AboutApp;
