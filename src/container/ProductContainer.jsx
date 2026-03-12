import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import Skeleton from "../components/Skeleton";

let cache = null;
let lastFetch = null;

function ProductContainer() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {

    if (cache) {
      setProducts(cache);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();

      cache = data.products;
      lastFetch = Date.now();

      setProducts(data.products);
      setLoading(false);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <Skeleton />;

  return <ProductList products={products} />;
}

export default ProductContainer;