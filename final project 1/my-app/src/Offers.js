import React, { useState } from 'react';
import SwiperCore, { Thumbs, Scrollbar } from 'swiper';
import 'swiper/swiper-bundle.css';
import './Offers.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import alpha from './photos/icon-photo/Path 54.svg'
import Bussines from './Bussines';

SwiperCore.use([Thumbs, Scrollbar]);

function Offers() {
    const offer = [];
    const product = [];
    const [products, setproducts] = useState()
    const [offers, setOffers] = useState()

    for (let i = 0; i < 4; i += 1) {
        offer.push(
            <SwiperSlide key={`thumbs - ${i}`} tag="li" >
                <div className="offers-container">
                    <a href="" className="decoration">
                        <div className="individual-div" style={{ height: "280px" }}>
                            <div className="div-container">
                                <img src={alpha} className="icon"></img>
                                <div style={{ paddingRight: "5%" }}>
                                    <p className="text" style={{ width: "200px" }}>online</p>
                                    <p className="text" style={{ width: "200px" }}>consultation</p>
                                </div>
                            </div>
                            <p className="l-text">pleasing news from alpha, now you can get a consultation online </p>
                        </div>
                    </a>
                </div>
            </SwiperSlide >
        )
        product.push(
            <SwiperSlide key={`thumbs - ${i}`} tag="li" >
                <div className="offers-container" >
                    <a href="" className="decoration">
                        <div className="individual-div" style={{ backgroundColor: "#5C656B", height: "250px" }}>
                            <div className="p-container">
                                <img src={alpha} className="icon" style={{ paddingLeft: "0" }}></img>
                                <div style={{ paddingRight: "5%" }}>
                                    <p className="text">Employer Liability</p>
                                    <p className="text" style={{ justifyContent: "flex-start" }}>Insurance</p>
                                </div>
                            </div>
                            <p className="p-text">Employer Liability Insurance provides financial protection for both the employer and the employee.</p>
                        </div>
                    </a>
                </div>
            </SwiperSlide >
        )
    }

    return (
        <div>
            <p className="p">OTHER OFFERS</p>
            <Swiper id="thumbs"
                spaceBetween={1}
                slidesPerView={3}
                watchSlidesVisibility
                Flip
                onSwiper={setOffers}
                Scrollbar
            >
                {offer}
            </Swiper>
            <Bussines />
            <p className="p">EXCLUSIVE PRODUCTS</p>
            <Swiper id="products"
                spaceBetween={1}
                slidesPerView={3}
                watchSlidesVisibility
                Flip
                onSwiper={setproducts}
                Scrollbar
            >
                {product}
            </Swiper>
        </div>
    )
};
export default Offers;