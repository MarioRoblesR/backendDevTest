import { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';
import ProductItem from '../components/ProductItem';
import Search from '../components/Search';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  const handleSearch = (query) => {
    const filtered = products.filter((p) =>
      p.brand.toLowerCase().includes(query.toLowerCase()) ||
      p.model.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <div>
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;