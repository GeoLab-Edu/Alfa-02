import React from 'react';
import 'swiper/swiper-bundle.css';
import './Swiper.css';
import './Footer.css'
import alfa from './photos/icon-photo/3.svg'
import apple from './photos/icon-photo/iconfinder_16-apple_104490 (1).svg'
import android from './photos/icon-photo/iconfinder_36-android_104471 (1).svg'
import youtube from './photos/icon-photo/iconfinder_58-youtube_104445.svg'
import facebook from './photos/icon-photo/iconfinder_facebook_circle_black_107153.svg'
import linkedin from './photos/icon-photo/iconfinder_linkedin_circle_black_107159.svg'

function Footer() {
    return (
        <div >
            <div className="footer-container">
                <div className="div-flexible">
                    <div>
                        <div className="div-wrapper">
                            <img src={alfa} style={{ width: 41 }, { height: 48 }}></img>
                            <p style={{ color: "#FFFFFF", margin: 0, fontSize: 36 }}>ALPHA</p>
                        </div>
                        <p style={{ color: "#FFFFFF", margin: 0, fontSize: 18 }}>Insurance Company</p>
                    </div>
                    <div style={{ display: "flex" }}>
                        <img src={youtube} style={{ marginRight: "3%" }}></img>
                        <img src={facebook} style={{ marginRight: "3%" }}></img>
                        <img src={linkedin} style={{ marginRight: "3%" }}></img>
                    </div>
                </div>
                <div className="component-wrapper">
                    <div>
                        <p style={{ fontSize: 18, color: "white", fontFamily: "Montserrat" }}>Individual</p>
                        <p className="p-size">health</p>
                        <p className="p-size">auto</p>
                        <p className="p-size">travel</p>
                        <p className="p-size">property</p>
                        <p className="p-size">responsibility</p>
                    </div>
                    <div>
                        <p style={{ fontSize: 18, color: "white", fontFamily: "Montserrat" }}>For Bussines</p>
                        <p className="p-size">bank</p>
                        <p className="p-size">transport</p>
                        <p className="p-size">truck</p>
                        <p className="p-size">property</p>
                        <p className="p-size">harvest</p>
                        <p className="p-size">responsibility</p>
                    </div>
                    <div>
                        <p style={{ fontSize: 18, color: "white", fontFamily: "Montserrat" }}>Company</p>
                        <p className="p-size">who we are</p>
                        <p className="p-size">history</p>
                        <p className="p-size">career</p>
                        <p className="p-size">blog</p>
                    </div>
                    <div>
                        <p style={{ fontSize: 18, color: "white", fontFamily: "Montserrat" }}>Contact</p>
                        <p className="p-size">hot line</p>
                        <p className="p-size">online consultation</p>
                        <p className="p-size">anonymous message</p>
                        <p className="p-size">complain message</p>
                        <p className="p-size">offices</p>
                    </div>
                    <div>
                        <p style={{ fontSize: 18, color: "white", fontFamily: "Montserrat" }}>Our Apps:</p>
                        <div style={{ display: "flex", flexDirection: "row", }}>
                            <div className="div-link" style={{ marginRight: "3%" }}>
                                <img src={apple} ></img>
                                <div className="align-text">
                                    <p style={{ fontFamily: "FiraGO", fontSize: "10px", margin: "0" }}>Download from</p>
                                    <p style={{ fontFamily: "FiraGO", fontSize: "18px", margin: "0" }}>App Store</p>
                                </div>
                            </div>
                            <div className="div-link">
                                <img src={android} ></img>
                                <div className="align-text">
                                    <p style={{ fontFamily: "FiraGO", fontSize: "10px", margin: "0" }}>Download from</p>
                                    <p style={{ fontFamily: "FiraGO", fontSize: "18px", margin: "0" }}>Play Store</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="component-wrapper opacity-text">
                    <p className="text-wrapper" style={{ width: "7%" }}>AVERSI RATIONAL</p>
                    <p className="text-wrapper" style={{ width: "10%" }}>MEDALPHA HOSPITALS</p>
                    <p className="text-wrapper" style={{ width: "7%" }}>AVERSI PHARMA</p>
                    <p className="text-wrapper" style={{ width: "15%" }}>NATIONAL CENTER FOR SURGERY</p>
                    <p className="text-wrapper" style={{ width: "7%" }}>AVERSI CLINIC</p>
                    <p className="text-wrapper" style={{ width: "10%" }}>BOTCHORISHVILI CLINIC</p>
                </div>


            </div>
        </div >
    )
};
export default Footer;