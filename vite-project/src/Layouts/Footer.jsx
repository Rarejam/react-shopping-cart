import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="first-footer-div">
        <div>Blog</div>
        <div>Become an Affiliate</div>
        <div>Product Index</div>
      </div>
      <div className="second-footer-div">
        <div>Terms and Conditions</div>
        <div>Product Index</div>
        <div></div>
      </div>
      <div className="third-footer-div">
        <div>
          <b>Follow Us!</b>
        </div>
        <div className="footer-svgs">
          <a href="http://www.instagram.com">
            <div className="instagram"></div>
          </a>
          {/* </div> */}
          <a href="http://www.linkedin.com">
            <div className="link"></div>
          </a>
          <a href="http://www.youtube.com">
            <div className="youtube"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
