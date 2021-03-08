import React, { useState } from 'react';
import SwiperCore, { Thumbs, Scrollbar } from 'swiper';
import 'swiper/swiper-bundle.css';
import './Offers.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import alpha from './photos/icon-photo/Path-54.svg'

SwiperCore.use([Thumbs, Scrollbar]);

export default function Products() {

    const product = [];
    const [products, setproducts] = useState()

    for (let i = 0; i < 4; i += 1) {
        product.push(
            <SwiperSlide key={`thumbs - ${i}`} tag="li" >
                <div className="offers-container" >
                    <a href="" className="decoration">
                        <div className="individual-div p-height" style={{ backgroundColor: "#5C656B", opacity: `${1 - (i * 0.2)}` }}>
                            <div className="p-container">
                                <img src={alpha} className="icon" style={{ paddingLeft: "0" }}></img>
                                <div style={{ paddingRight: "5%" }} id="employer">
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
            <Swiper id="products"
                spaceBetween={1}
                slidesPerView={3}
                watchSlidesVisibility
                Flip
                onSwiper={setproducts}
                Scrollbar
                style={{ marginBottom: "3%" }}
            >
                {product}
            </Swiper><Swiper id="products1"
                spaceBetween={1}
                slidesPerView={2}
                watchSlidesVisibility
                Flip
                onSwiper={setproducts}
                Scrollbar
                style={{ marginBottom: "3%" }}
                className="flex"
            >
                {product}
            </Swiper>
            <Swiper id="products2"
                spaceBetween={1}
                slidesPerView={1}
                watchSlidesVisibility
                Flip
                onSwiper={setproducts}
                Scrollbar
                style={{ marginBottom: "3%" }}
                className="flex after-box"
            >
                {product}
            </Swiper>
        </div>
    )
}