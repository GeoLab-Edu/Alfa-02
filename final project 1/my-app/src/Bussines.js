import React from 'react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import './Swiper.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import cargo from './photos/icon-photo/Group-412@2x.png'
import tractor from './photos/icon-photo/Group-236@2x.png'
import house from './photos/icon-photo/house-24px.svg'
import "./Bussines.css"

SwiperCore.use([Pagination]);

function Bussines() {
    const bussines = [];

    for (let i = 0; i < 3; i += 1) {
        bussines.push(
            <SwiperSlide key={`slide - ${i}`} tag="li">
                <div>
                    <div className="bussines-container">
                        <a href="" className="decoration">
                            <div className="img-container">
                                <div className="b-img-size" style={{ backgroundImage: `url(${tractor})` }}>
                                    <img src={house} className="icon"></img>
                                </div>
                                <p style={{ fontFamily: 'Montserrat', fontSize: "24px" }} className="decoration">Harvest Insurance</p>
                            </div>
                        </a>
                        <a href="" className="decoration">
                            <div className="img-container">
                                <div className="b-img-size img-tag" style={{ backgroundImage: `url(${cargo})` }}>
                                    <img src={house} className="icon"></img>
                                </div>
                                <p style={{ fontFamily: 'Montserrat', fontSize: "24px" }} className="decoration">Cargo Insurance</p>
                            </div>
                        </a>
                    </div>
                </div>
            </SwiperSlide >
        )
    }
    return (
        <div>
            <p className="bussines-text" style={{ marginBottom: "30px" }}>FOR BUSSINES</p>
            <p className="bussines-text" style={{ fontSize: "16px" }}>Is your business secured? Do you know how much your business protection will cost? Alpha provides insurance coverages for more than ten thousand small entrepreneurs. We offer you coverages meeting your special needs. Alpha is recommended by 93% of our users.</p>
            <React.Fragment>
                <Swiper
                    wrapperTag="ul"
                    id="main"
                    pagination
                    className="img"
                    style={{ height: "470px" }}
                > {bussines}
                </Swiper>
            </React.Fragment>
        </div>
    )
};
export default Bussines;