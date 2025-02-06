const ProductImage = ({ src, alt }) => {
    return <img src={src} alt={alt} onError={(e) => (e.target.src = '/fallback-image.png')} />;
  };
  
  export default ProductImage;
  