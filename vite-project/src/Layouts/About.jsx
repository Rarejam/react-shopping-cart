import { Link } from "react-router-dom";
export const About = () => {
  return (
    <div className="about">
      <h1>This is the About page</h1>
      <Link to="/" style={{ color: "white" }}>
        To navigate back to the home page
      </Link>
      <h1>this was created by Rarejam mehh</h1>
      <a
        href="https://github.com/Rarejam/shopping-cart"
        style={{ color: "white" }}
      >
        my github
      </a>
    </div>
  );
};
