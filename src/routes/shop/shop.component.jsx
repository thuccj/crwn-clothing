import { useContext } from "react";

import { ProductsContext } from "../../contexts/product.context";

import PorductCard from "../../components/product-card/product-card.component";

import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <PorductCard key={product.id} product={product}></PorductCard>
      ))}
    </div>
  );
};

export default Shop;
