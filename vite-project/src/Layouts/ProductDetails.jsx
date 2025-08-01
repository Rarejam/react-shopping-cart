import { useContext } from "react";
import { ShopContext } from "./ShopContext";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const { products } = useContext(ShopContext);
  if (!products || products.length === 0) {
    return <div className="load-div">Loading...</div>;
  }

  return (
    <div className="main-content">
      {console.log(products)}
      <div className="section1-main-content">
        {products.map((product) => {
          return (
            <div key={product.id} className="content">
              <Link to={`/shop/product/${product.id}`}>
                <div
                  className="content-image"
                  style={{ backgroundImage: `url(${product.image})` }}
                ></div>
              </Link>
              <div className="content-name">
                <div>{product.title}</div>
                <div>Price : ${product.price}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductDetails;
