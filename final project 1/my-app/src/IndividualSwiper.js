import React, { useState } from 'react';
import SwiperCore, { Thumbs, Scrollbar } from 'swiper';
import 'swiper/swiper-bundle.css';
import './Offers.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import insurance from './photos/icon-photo/Group-411@2x.png'
import insurance1 from './photos/icon-photo/Group-411.png'
import house from './photos/icon-photo/house-24px.svg'
import "./Individual.css"

SwiperCore.use([Thumbs, Scrollbar]);

export default function Products() {

    const individual = [];
    const [individuals, setindividuals] = useState()

    for (let i = 0; i < 6; i += 1) {
        individual.push(
            <SwiperSlide key={`thumbs - ${i}`} tag="li" >
                <div className="individual-container1" id="mid">
                    <a href="" className="decoration">
                        <div className="img-container">
                            <div className="img-size" style={{ backgroundImage: `url(${insurance})` }}>
                                <img src={house} className="individual-icon"></img>
                            </div>
                            <h2 style={{ fontFamily: 'Montserrat' }} className="decoration">PROPERTY INSURANCE</h2>
                        </div>
                    </a>
                </div>
                <div className="individual-container2" >
                    <a href="" className="decoration">
                        <div className="img-container">
                            <div className="img-size" style={{ backgroundImage: `url(${insurance1})` }} id="individual2">
                                <img src={house} className="individual-icon"></img>
                            </div>
                            <h2 style={{ fontFamily: 'Montserrat' }} className="decoration" id="individual1">PROPERTY INSURANCE</h2>
                        </div>
                    </a>
                </div>
            </SwiperSlide >

        )
    }

    return (
        <Swiper id="products"
            spaceBetween={1}
            slidesPerView={2}
            watchSlidesVisibility
            Flip
            onSwiper={setindividuals}
            Scrollbar
            style={{ marginBottom: "3%" }}
        >
            {individual}
        </Swiper>
    )
}