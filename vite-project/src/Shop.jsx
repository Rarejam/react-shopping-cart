import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import { ShopContext } from "./Layouts/ShopContext";

const Shop = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        console.log("Fetching products...");
        const data = await res.json();
        console.log("Fetched data:", data);
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);
  //   const addToCart = (product) => {
  //     setCartItems((prev) => [...prev, product]);
  //     console.log(product.price);
  //   };

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const decreaseQuantity = (itemToUpdate) => {
    setCartItems((prevItems) => {
      return prevItems
        .map((item) =>
          item.id === itemToUpdate.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0); // remove if quantity hits 0
    });
  };

  const increaseQuantity = (itemToUpdate) => {
    setCartItems((prevItems) => {
      return prevItems
        .map((item) =>
          item.id === itemToUpdate.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
        .filter((item) => item.quantity > 0); // remove if quantity hits 0
    });
  };

  const removeItem = (itemToRemove) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemToRemove.id)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };
  return (
    <div>
      <ShopContext.Provider
        value={{
          products,
          cartItems,
          addToCart,
          decreaseQuantity,
          increaseQuantity,
          removeItem,
          clearCart,
        }}
      >
        <Header />
        <Outlet />
        {/* <ProductDetails /> */}
        <Footer />
      </ShopContext.Provider>
    </div>
  );
};

export default Shop;
