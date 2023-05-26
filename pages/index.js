import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData }) => (
  <div className='maxWidth'>

    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
    <div className="products-heading">
      <h2>Best Seller Products</h2>
    </div>

    <div className="products-container">
      {products?.slice(0, 7).map((product, i) => <Product key={product._id} product={product} />)}
    </div>
    <div className='buttons'>
      <a href='/Category'><button>View More...</button></a>
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;
