import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const addToCartHandler = () => {};
  return (
    <div className="home">
      <section></section>
      <h1>
        Latest Products
        <Link to={"/search"} className="findmore">
          More
        </Link>
      </h1>
      <main>
        <ProductCard
          productId="adsad"
          name="Macbook"
          price={4545}
          stock={435}
          handler={addToCartHandler}
          photo="https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg"
        />
      </main>
    </div>
  );
};

export default Home;
