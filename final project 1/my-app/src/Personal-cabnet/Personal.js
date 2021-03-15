import { Link } from "react-router-dom"
import advert from "../photos/icon-photo/advert@2x.png"
import myPhoto from "../photos/icon-photo/pexels-photo-1073031@2x.png"
import "./Personal.css"
import chair from "../photos/icon-photo/Group-415@2x.png"
import house from '../photos/icon-photo/house-24px.svg'
import up from "../photos/icon-photo/keyboard_arrow_down-24px.svg"
import Icon from "../photos/icon-photo/drive_eta-24px.svg"
import insurance from "../photos/icon-photo/Group-416@2x.png"
import plus from "../photos/icon-photo/Path-193.svg"
import statements from "../photos/icon-photo/Group-412.svg"
import notifications from "../photos/icon-photo/Group-413.svg"
import bills from "../photos/icon-photo/Group-414.svg"
import Footer from "../Footer"
import Products from "../Products"
import phone from "../photos/icon-photo/phonelink_ring-24px.svg"
import search from "../photos/icon-photo/search-24px (1).svg"
import consultation from "../photos/icon-photo/icons.svg"


export default function Personal() {

    function insurancePersonal() {
        let insurance = document.querySelector("#insurance");
        let up = document.querySelector("#up");
        let background = document.querySelector("#insurancePersonal");
        if (insurance.style.display === "none") {
            insurance.style.display = "block";
            up.style.transform = "scaleY(-1)";
            background.style.height = "auto"
            background.style.paddingBottom = "2%"
        }
        else {
            insurance.style.display = "none";
            up.style.transform = "scaleY(1)";
            background.style.height = "auto"
        }
    }
    return (
        <div style={{ backgroundColor: "#F6F6F6" }}>
            <div >
                <div style={{ backgroundImage: `url(${advert})`, marginTop: 0 }} className="img div-place personal-back contain">
                    <div className="div-flex" style={{ justifyContent: "flex-start", alignItems: "flex-end" }}>
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
                        <div className="place-name">
                            <img src={myPhoto} className="circle placeholder" ></img>
                            <div className="name-container">
                                <p style={{ fontFamily: "Montserrat", margin: 0 }} className="title">beso dvalishvili</p>
                                <Link to="/" style={{ fontFamily: "Montserrat", margin: 0 }} className="personal-p">Edit</Link>
                            </div>

                            <div className="logout" id="logout">
                                <Link to="/" style={{ fontFamily: "Montserrat", margin: 0 }} className="personal-p">logout</Link>
                                <Link to="/" style={{ fontFamily: "Montserrat", margin: 0 }} className="personal-p">Add Business Account +</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ width: "85%", paddingLeft: "6%" }}>
                <p className="p-color">  ACTIVE POLICIES  </p>



                {/* active policies */}
                <div className="policies">
                    <div style={{ backgroundImage: `url(${chair})` }} className="border" id="insurancePersonal">
                        <div className="row">
                            <img src={house} className="icon-wrap"></img>
                            <p className="color" style={{ margin: 0 }}>PROPERTY INSURANCE</p>
                            <button style={{ background: "none", border: "none", width: 40 }}><img src={up} id="up" onClick={insurancePersonal}></img></button>
                        </div>
                        <hr style={{
                            color: "white",
                            backgroundColor: "white",
                            height: 0.5,
                            width: "90%"
                        }} />
                        <div style={{
                            color: "#5C656B",
                            width: "90%",
                            marginLeft: "5%",
                            borderRadius: 5
                        }} >
                            <div id="insurance" style={{ display: "none" }}>
                                {/* property insurance */}
                                <div style={{ marginBottom: "2%" }} >
                                    <div className="wrapper" style={{
                                        backgroundColor: "white",
                                        color: "#5C656B",
                                        marginLeft: "3%",
                                        borderRadius: 5
                                    }}>
                                        <p style={{ fontSize: 20 }}>Property Insurance</p>
                                        <div>
                                            <p style={{ fontSize: 16, margin: 0, paddingBottom: 5 }}>Beso Dvalishvili</p>
                                            <p style={{ fontSize: 16, margin: 0, paddingBottom: 5 }}>Valid Untill: 17/05/21</p>
                                            <p style={{ fontSize: 16, margin: 0, paddingBottom: 5 }}>Police's Number: 009876509</p>
                                            <p style={{ fontSize: 22, margin: 0, paddingBottom: 10, color: "#E84F5B" }}><b>34.00 Gel</b></p>

                                            <div className="btn-position" >
                                                <button className="btn-style personal-btn" style={{ marginBottom: 10 }}>pay</button>
                                                <Link to="" style={{ fontSize: 20, margin: 0, paddingBottom: 5, color: "#5C656B" }}><b>change payment method</b></Link>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="wrapper" style={{
                                    backgroundColor: "white",
                                    color: "#5C656B",
                                    marginLeft: "3%",
                                    borderRadius: 5
                                }} >
                                    <div>
                                        <div className="btn-position links-text" >
                                            <Link to="" style={{ fontSize: 20, margin: 0, paddingBottom: 5, color: "#5C656B" }}><b>change payment method</b></Link>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>


                    <div style={{ backgroundImage: `url(${insurance})` }} className="border">
                        <div className="row">
                            <img src={Icon} className="icon-wrap"></img>
                            <p className="color">AUTO INSURANCE</p>
                            <img src={up}></img>
                        </div>
                        <hr style={{
                            color: "white",
                            backgroundColor: "white",
                            height: 0.5,
                            width: "90%"
                        }} />
                    </div>


                    <div style={{ backgroundColor: "#E84F5B", opacity: 0.6 }} className="border">
                        <div className="row">
                            <img src={plus} className="icon-wrap" style={{ width: 43 }}></img>
                            <p className="color" style={{ alignSelf: "center", width: "65%" }}>ADD POLICE</p>
                        </div>


                        <hr style={{
                            color: "white",
                            backgroundColor: "white",
                            height: 0.5,
                            width: "90%"
                        }} />
                    </div>
                </div>

                {/* links */}
                <div className="row" style={{ marginTop: "3%", justifyContent: "space-around", marginBottom: "4%" }}>
                    <div className="links-text">
                        <Link to=""><img src={bills} id="link"></img></Link>
                        <p className="px26">MY BILLS</p>
                    </div>
                    <div className="links-text">
                        <Link to=""><img src={statements} id="link"></img></Link>
                        <p className="px26">STATEMENTS</p>
                    </div>
                    <div className="links-text">
                        <Link to=""><img src={notifications} id="link"></img></Link>
                        <p className="px26">NOTIFICATIONS</p>
                    </div>
                </div>



            </div>
            <Products />

            <Footer />
        </div>
    )
}