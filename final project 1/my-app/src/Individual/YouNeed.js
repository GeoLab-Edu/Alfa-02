import React, { useState } from 'react';
import SwiperCore, { Thumbs, Scrollbar } from 'swiper';
import 'swiper/swiper-bundle.css';
import '../Offers.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import alpha from '../photos/icon-photo/Path-54.svg'
import drive from "../photos/icon-photo/pexels-photo-1073031@2x.png"
import "./Ind.css"
import broke from "../photos/icon-photo/road-man-broken-car-6078.png"
import crack from "../photos/icon-photo/photo-1558284377-30ae5c450b73.png"
SwiperCore.use([Thumbs, Scrollbar]);

function YouNeed() {
    const Need = [];
    const [YouNeed, setYouNeed] = useState()

    for (let i = 0; i < 4; i += 1) {
        Need.push(
            <SwiperSlide key={`YouNeed - ${i}`} tag="li" >
                <div style={{ width: "80%", marginBottom: "5%" }}>
                    <a href="" className="decoration">
                        <div className="drive-container" style={{ backgroundImage: `url(${drive})` }}>
                            <div className="p-container margin">
                                <div className="self-div">
                                    <img src={alpha} className="icon"></img>
                                    <div style={{ paddingRight: "5%" }}>
                                        <p className="">Authorized Driver</p>
                                    </div>
                                </div>
                                <p className="l-text" style={{ paddingBottom: "3%" }}>Any person over 21 and under 70 years of age having a valid driving license and at least 1 (one) year driving experience.</p>
                            </div>
                        </div>
                    </a>
                </div>
            </SwiperSlide >
        )
    }

    return (
        <div>
            <p className="p">That's what you need to know</p>
            <Swiper id="Need"
                spaceBetween={1}
                slidesPerView={3}
                watchSlidesVisibility
                Flip
                onSwiper={setYouNeed}
                Scrollbar
            >
                {Need}
            </Swiper>
            <Swiper id="Need1"
                spaceBetween={1}
                slidesPerView={2}
                watchSlidesVisibility
                Flip
                onSwiper={setYouNeed}
                Scrollbar
            >
                {Need}
            </Swiper>
            <div className="box" style={{ backgroundColor: "#F8F8F8" }} id="second-box">
                <div style={{ backgroundImage: `url(${broke})`, marginBottom: "3%" }} className="border motor-img">
                    <div>
                        <p style={{
                            transform: "scaleX(-1)",
                            color: "white",
                            textAlign: "end",
                            paddingRight: "5%",
                            fontFamily: "FiraGO",
                            fontSize: 20
                        }}>Motor Insurance cover</p>
                        <p style={{
                            transform: "scaleX(-1)",
                            color: "white",
                            textAlign: "end",
                            paddingRight: "5%",
                            fontFamily: "FiraGO",
                            fontSize: 14
                        }}>Any person over 21 and under 70...</p>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${crack})`, marginBottom: "3%" }} className="border motor-img">
                    <div>
                        <p style={{
                            transform: "scaleX(-1)",
                            color: "white",
                            textAlign: "end",
                            paddingRight: "5%",
                            fontFamily: "FiraGO",
                            fontSize: 20
                        }}>How to act in case of Insurance Event? </p>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${broke})` }} className="border motor-img">
                    <div>
                        <p style={{
                            transform: "scaleX(-1)",
                            color: "white",
                            textAlign: "end",
                            paddingRight: "5%",
                            fontFamily: "FiraGO",
                            fontSize: 20
                        }}>Motor Insurance cover</p>
                        <p style={{
                            transform: "scaleX(-1)",
                            color: "white",
                            textAlign: "end",
                            paddingRight: "5%",
                            fontFamily: "FiraGO",
                            fontSize: 14
                        }}>Any person over 21 and under 70...</p>
                    </div>
                </div>

            </div>
        </div>
    )
};
export default YouNeed;