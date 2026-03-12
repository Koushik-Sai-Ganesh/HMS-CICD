function ProductCard({ product }) {
  return (
    <div style={{border:"1px solid gray", margin:"10px", padding:"10px"}}>
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default ProductCard;