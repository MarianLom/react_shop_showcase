import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>
        2022 All right reserved <br />
        DEMO SITE: Under dvelopment! You can test detail page, add to cart with
        continue shopping, moveing with quantity, recalculation and finaly pay
        with stripe. <br />
        Show case of HTML, CSS, React, JS, JSX, Next.js, Rest API, Stripe GATE{" "}
        <br /> Created by Marian
      </p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
