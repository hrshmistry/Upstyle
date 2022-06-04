import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useCart } from "../../context/cartContext";
import "./Home.css";
import BeatLoader from "react-spinners/BeatLoader";

const Home = () => {
  const {
    state: { products },
  } = useCart();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 3000);
  }, []);

  return (
    <div className="home">
      {isLoading ? (
        <BeatLoader color="#1D4354" loading={isLoading} size={20} />
      ) : (
        products.map((product) => {
          return (
            <div key={product.key} style={{ height: "100%" }}>
              <ProductCard product={product} />
            </div>
          );
        })
      )}
    </div>
  );
};

export default Home;
