import React from 'react';

// Fake product data
const product = {
  id: 1,
  name: 'Wireless Headphones',
  description: 'High-quality wireless headphones with noise-cancelling feature.',
  price: '$120.99',
  imageUrl: 'https://d1ncau8tqf99kp.cloudfront.net/converted/110590_original_local_1200x1050_v3_converted.webp' // Placeholder image URL
};

const ProductDetails = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} style={{ width: '100%', maxWidth: '300px', height: 'auto', marginBottom: '20px' }} />
      <p>{product.description}</p>
      <p><strong>Price: </strong>{product.price}</p>
      <button style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;