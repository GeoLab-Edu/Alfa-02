import React from 'react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import './Swiper.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import swiper from './photos/icon-photo/pexels-photo-2029663@2x.png'
import phone from "./photos/icon-photo/phonelink_ring-24px.svg"
import search from "./photos/icon-photo/search-24px (1).svg"
import consultation from "./photos/icon-photo/icons.svg"
import { Link } from 'react-router-dom';

SwiperCore.use([Pagination]);

function Switch() {
    const slides = [];

    for (let i = 1; i < 4; i += 1) {
        slides.push(
            <SwiperSlide key={`slide - ${i}`} tag="li" className="place" id={`slide - ${i}`}>
                <div id={`hidden-${i}`} onSwipe>
                    <Link className="hidden-btn-style hidden-container" to="/personal/auto-insurance/buy" style={{ borderRadius: 5 }} >
                        <img src={phone} style={{ width: 24, marginRight: "10%", marginLeft: "-30%" }}></img>
                        <p style={{ fontSize: "17px", fontFamily: "FiraGO", marginRight: "5%" }}> 0322567898</p>
                    </Link>
                    <Link className="hidden-btn-style hidden-container margin-hidden5" to="/personal/auto-insurance/buy" style={{ borderRadius: 5 }} >
                        <img src={consultation} style={{ width: 24, marginRight: "10%", marginLeft: "-10%" }}></img>
                        <p style={{ fontSize: "17px", fontFamily: "FiraGO", marginRight: "5%" }}> Online Consultation</p>
                    </Link>
                    <Link className="hidden-btn-style hidden-container margin-hidden10" to="/personal/auto-insurance/buy" style={{ borderRadius: 5 }} id="search-hidden">
                        <img src={search} style={{ width: 24, marginRight: "10%", marginLeft: "-40%" }}></img>
                        <p style={{ fontSize: "17px", fontFamily: "FiraGO", marginRight: "5%" }}> Search</p>
                    </Link>
                </div>
                <div className="h1">
                    <div>
                        <h1 style={{ fontFamily: 'Montserrat' }} id="prop-h1">PROPERTY INSURANCE</h1>
                        <hr className="hr" />
                        <p id="p-size">To avoid the unexpected expenses and major discomfort choose a better insurance policy for your home and continue to live in peace.</p>
                    </div>
                </div>
            </SwiperSlide >
        )
    }
    return (
        <div>
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
        </div>
    )
};
export default Switch;