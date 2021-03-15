import car from "../photos/icon-photo/pexels-photo-1571783@2x.png"
import phone from "../photos/icon-photo/phonelink_ring-24px.svg"
import search from "../photos/icon-photo/search-24px (1).svg"
import consultation from "../photos/icon-photo/icons.svg"
import { Link } from "react-router-dom"

export default function IndividualHead() {

    return (
        <div style={{ backgroundImage: `url(${car})`, marginTop: 0 }} className="img div-place">
            <div className="div-flex" style={{ justifyContent: "flex-start" }}>
                {/* <div><p>Home> Individual> Auto</p></div> */}
                <div >
                    <Link className="hidden-btn-style hidden-container personal-right" to="/personal/auto-insurance/buy" style={{ borderRadius: 5 }} >
                        <img src={phone} style={{ width: 24, marginRight: "10%", marginLeft: "-30%" }}></img>
                        <p style={{ fontSize: "17px", fontFamily: "FiraGO", marginRight: "5%" }}> 0322567898</p>
                    </Link>
                    <Link className="hidden-btn-style hidden-container margin-hidden5 personal-right" to="/personal/auto-insurance/buy" style={{ borderRadius: 5 }} >
                        <img src={consultation} style={{ width: 24, marginRight: "10%", marginLeft: "-10%" }}></img>
                        <p style={{ fontSize: "17px", fontFamily: "FiraGO", marginRight: "5%" }}> Online Consultation</p>
                    </Link>
                    <Link className="hidden-btn-style hidden-container margin-hidden10 personal-right" to="/personal/auto-insurance/buy" style={{ borderRadius: 5 }} id="search-hidden">
                        <img src={search} style={{ width: 24, marginRight: "10%", marginLeft: "-40%" }}></img>
                        <p style={{ fontSize: "17px", fontFamily: "FiraGO", marginRight: "5%" }}> Search</p>
                    </Link>
                </div>
                <div className="h1 margin-bliad" >
                    <p className="font-size" style={{ fontFamily: 'Montserrat' }} id="ind-p">
                        AUTO INSURANCE</p>
                    <hr className="hr" />
                    <p style={{ fontFamily: 'FiraGO' }} className="individual-size">While driving the road is full of surprises. You can protect your finances.</p>
                </div>
            </div>
        </div>
    )
}
