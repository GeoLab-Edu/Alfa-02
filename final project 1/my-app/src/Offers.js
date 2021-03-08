import React, { useState } from 'react';
import SwiperCore, { Thumbs, Scrollbar } from 'swiper';
import 'swiper/swiper-bundle.css';
import './Offers.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import alpha from './photos/icon-photo/Path-54.svg'
import Bussines from './Bussines';
import OtherOffers from './OtherOffers';

SwiperCore.use([Thumbs, Scrollbar]);

function Offers() {
    const offer = [];
    const [offers, setOffers] = useState()


    for (let i = 0; i < 4; i += 1) {
        offer.push(
            <SwiperSlide key={`thumbs - ${i}`} tag="li" >
                <div className="offers-container">
                    <a href="" className="decoration">
                        <div className="individual-div" style={{ opacity: `${1 - (i * 0.2)}` }} id="offers-div">
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
            <Swiper id="thumbs1"
                spaceBetween={1}
                slidesPerView={2}
                watchSlidesVisibility
                Flip
                onSwiper={setOffers}
                Scrollbar
                className="flex"
            >
                {offer}
            </Swiper>

            <OtherOffers />

            <Bussines />
        </div>
    )
};
export default Offers;