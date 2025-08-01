import { useParams } from "react-router-dom";
import { ShopContext } from "./ShopContext";
import { useContext } from "react";
const EachProduct = () => {
  const { id } = useParams();
  const { products, addToCart } = useContext(ShopContext);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="container">Product not found or loading...</div>;
  }
  return (
    <div>
      <div className="single-product">
        <img src={product.image} alt={product.title} />
        <div className="product-info">
          <h2>{product.title}</h2>
          <p className="description">{product.description}</p>
          <div className="price">${product.price}</div>
          <button
            onClick={() => addToCart(product)}
            style={{
              transition: "0.3s",
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default EachProduct;
