// src/components/ProductActions.js
import { addToCart } from '../services/api';

const ProductActions = ({ productId }) => {
  const handleAddToCart = () => {
    addToCart(productId).then(() => alert('Product added to cart!'));
  };

  return <button onClick={handleAddToCart}>Add to Cart</button>;
};

export default ProductActions;
