import React from 'react';
import 'swiper/swiper-bundle.css';
import './Offers.css';
import alpha from './photos/icon-photo/Path-54.svg'

export default function OtherOffers() {
    return (
        <div className="after-box">
            <div className="offers-container" >
                <a href="" className="decoration">
                    <div className="individual-div" style={{ height: "180px" }}>
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
            <div className="offers-container" >
                <a href="" className="decoration">
                    <div className="individual-div" style={{ height: "180px" }}>
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
        </div>
    )

}