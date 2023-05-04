import React, { useState } from 'react';
import { client } from '../lib/client';

import Product from '../components/Product';

function Category({ products }) {
  const [selectedTag, setSelectedTag] = useState(null);

  const filteredProducts = selectedTag
    ? products.filter((product) => product.tags.includes(selectedTag))
    : products;

  return (
    <div className='inCategory'>
      <h1>Category</h1>
      <div className="tag-buttons">
        <button
          className={selectedTag === null ? 'active' : ''}
          onClick={() => setSelectedTag(null)}
        >
          All Products
        </button>
        <button
          className={selectedTag === 'Football' ? 'active' : ''}
          onClick={() => setSelectedTag('Football')}
        >
          Football
        </button>
        <button
          className={selectedTag === 'Badminton' ? 'active' : ''}
          onClick={() => setSelectedTag('Badminton')}
        >
          Badminton
        </button>
        <button
          className={selectedTag === 'Basketball' ? 'active' : ''}
          onClick={() => setSelectedTag('Basketball')}
        >
          Basketball
        </button>
        <button
          className={selectedTag === 'Cricket' ? 'active' : ''}
          onClick={() => setSelectedTag('Cricket')}
        >
          Cricket
        </button>
        <button
          className={selectedTag === 'Vollyball' ? 'active' : ''}
          onClick={() => setSelectedTag('Vollyball')}
        >
          Vollyball
        </button>
        <button
          className={selectedTag === 'Boxing' ? 'active' : ''}
          onClick={() => setSelectedTag('Boxing')}
        >
          Boxing
        </button>
        <button
          className={selectedTag === 'Shoes' ? 'active' : ''}
          onClick={() => setSelectedTag('Shoes')}
        >
          Shoes
        </button>
      </div>
      <div className="products-container">
        {filteredProducts?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products }
  };
};

export default Category;
