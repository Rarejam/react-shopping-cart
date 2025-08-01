import AboutApp from "./AboutApp";
import { HomeApp } from "./HomeApp";
import Cart from "./Layouts/Cart";
import Checkout from "./Layouts/Checkout";
import EachProduct from "./Layouts/EachProduct";
import { Home } from "./Layouts/Home";
import ProductDetails from "./Layouts/ProductDetails";
import Shop from "./Shop";
const routes = [
  {
    path: "/",
    element: <HomeApp />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "shop",
    element: <Shop />,
    children: [
      {
        index: true,
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "product/:id",
        element: <EachProduct />,
      },
    ],
  },
  {
    path: "about",
    element: <AboutApp />,
  },
  {
    path: "*",
    element: <h1>404 - Page not found</h1>,
  },
];
export default routes;
