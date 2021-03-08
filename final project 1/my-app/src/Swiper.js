import React from 'react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import './Swiper.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import swiper from './photos/icon-photo/pexels-photo-2029663@2x.png'
import swiper1 from './photos/icon-photo/pexels-photo-2029663.png'

SwiperCore.use([Pagination]);

function Switch() {
    const slides = [];

    for (let i = 0; i < 3; i += 1) {
        slides.push(
            <SwiperSlide key={`slide - ${i}`} tag="li" className="place">
                <div className="h1">
                    <h1 style={{ fontFamily: 'Montserrat' }} id="prop-h1">PROPERTY INSURANCE</h1>
                    <hr className="hr" />
                    <p id="p-size">To avoid the unexpected expenses and major discomfort choose a better insurance policy for your home and continue to live in peace.</p>
                </div>
            </SwiperSlide >
        )
    }
    return (
        <React.Fragment>
            <Swiper
                wrapperTag="ul"
                id="main"
                pagination
                style={{ backgroundImage: `url(${swiper})`, }}
                className="img"
            > {slides}
            </Swiper>
        </React.Fragment >
    )
};
export default Switch;