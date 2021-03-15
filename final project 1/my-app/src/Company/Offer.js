import { Link } from "react-router-dom"
import company from "../photos/icon-photo/pexels-photo-2977565@2x.png"
import "./Company.css"
import phone from "../photos/icon-photo/phonelink_ring-24px.svg"
import search from "../photos/icon-photo/search-24px (1).svg"
import consultation from "../photos/icon-photo/icons.svg"

export default function Offer() {

    return (
        <div style={{ backgroundImage: `url(${company})`, marginTop: 0 }} className="img div-place">
            <div className="div-flex" style={{ justifyContent: "flex-start" }}>
                <div className="margin-o"><p>Home> Individual> Auto</p></div>
                <Link className="hidden-btn-style hidden-container personal-right" to="/personal/auto-insurance/buy" style={{ borderRadius: 5 }} >
                    <img src={phone} style={{ width: 24, marginRight: "10%", marginLeft: "-30%" }}></img>
                    <p style={{ fontSize: "17px", fontFamily: "FiraGO", marginRight: "5%" }} > 0322567898</p>
                </Link>
                <Link className="hidden-btn-style hidden-container margin-hidden5 personal-right" to="/personal/auto-insurance/buy" style={{ borderRadius: 5 }} >
                    <img src={consultation} style={{ width: 24, marginRight: "10%", marginLeft: "-10%" }}></img>
                    <p style={{ fontSize: "17px", fontFamily: "FiraGO", marginRight: "5%" }}> Online Consultation</p>
                </Link>
                <Link className="hidden-btn-style hidden-container margin-hidden10 personal-right" to="/personal/auto-insurance/buy" style={{ borderRadius: 5 }} id="search-hidden">
                    <img src={search} style={{ width: 24, marginRight: "10%", marginLeft: "-40%" }}></img>
                    <p style={{ fontSize: "17px", fontFamily: "FiraGO", marginRight: "5%" }}> Search</p>
                </Link>
                <div className="h1" id="offers-div1">
                    <p id="company">COMPANY</p>
                    <p style={{ fontFamily: 'Montserrat' }} className="offer-size">
                        We offer  a full range of insurance products</p>
                    <hr className="hr" />
                    <p style={{ fontFamily: 'FiraGO' }} className="offer-p">The insurance company Alpha is a subsidiary of Medical Holding Aversi.</p>
                    <p style={{ fontFamily: 'Montserrat' }} className="offer-size1">
                        We offer  a full range of insurance products</p>
                </div>
            </div>
        </div>
    )
}