import React from "react";

import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner } from "../components";

const Home = ({ products, bannerData, footerbannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className="products-heading">
        <h2>Best Selling Product</h2>
        <p>Mobile phones of many variations</p>
      </div>

      <div className="products-container">
        {products?.map((product) => (
          <Product key={products._id} product={product} />
        ))}
      </div>

      <FooterBanner footerBanner={footerbannerData && footerbannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const footerbannerQuery = '*[_type == "footerbanner"]';
  const footerbannerData = await client.fetch(footerbannerQuery);

  return {
    props: { products, bannerData, footerbannerData },
  };
};

export default Home;
