import React, { useState } from 'react';
import Swiper from "./Swiper";
import Individual from "./Individual";
import Offers from './Offers'
import Footer from "./Footer";
import FooterHead from './FooterHead';
import Products from './Products';
import IndividualSwiper from './IndividualSwiper';

export default function Body() {

    return (
        <div>
            <Swiper />
            <Individual />
            <IndividualSwiper />
            <Offers />
            <p className="p">EXCLUSIVE PRODUCTS</p>
            <Products />
            <FooterHead />
            <Footer />
        </div>

    )
}