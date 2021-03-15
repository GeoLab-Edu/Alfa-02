import React, { useState } from 'react';
import SwiperCore, { Thumbs, Scrollbar } from 'swiper';
import 'swiper/swiper-bundle.css';
import '../Offers.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import "../Individual.css"
import Automobile from "../photos/icon-photo/pexels-photo-1719648@2x.png"
import Automobile1 from "../photos/icon-photo/pexels-photo-1719648.png"
import Icon from "../photos/icon-photo/drive_eta-24px.svg"

SwiperCore.use([Thumbs, Scrollbar]);

export default function Drive() {

    const individual = [];
    const [individuals, setindividuals] = useState()

    for (let i = 0; i < 6; i += 1) {
        individual.push(
            <SwiperSlide key={`thumbs - ${i}`} tag="li" >
                <div className="individual-container1" id="mid">
                    <a href="" className="decoration">
                        <div className="img-container">
                            <div className="img-size" style={{ backgroundImage: `url(${Automobile})` }}>
                                <img src={Icon} className="icon"></img>
                            </div>
                            <h2 style={{ fontFamily: 'Montserrat' }} className="decoration">PROPERTY INSURANCE</h2>
                        </div>
                    </a>
                </div>
                <div className="individual-container2" >
                    <a href="" className="decoration">
                        <div >
                            <div className="img-size" style={{ backgroundImage: `url(${Automobile1})` }} id="individual2">
                                <img src={Icon} className="icon"></img>
                            </div>
                            <h2 style={{ fontFamily: 'Montserrat' }} className="decoration" id="individual1">AUTO INSURANCE</h2>
                        </div>
                    </a>
                </div>
            </SwiperSlide >

        )
    }

    return (
        <Swiper id="Drive"
            spaceBetween={1}
            slidesPerView={2}
            watchSlidesVisibility
            Flip
            onSwiper={setindividuals}
            Scrollbar
            style={{ marginBottom: "3%", marginTop: "2%" }}
        >
            {individual}
        </Swiper>
    )
}