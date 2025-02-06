import { Link } from 'react-router-dom';
import ProductImage from './ProductImage';

const ProductItem = ({ product }) => {
  return (
    <div>
      <ProductImage src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.brand}</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
};

export default ProductItem;
