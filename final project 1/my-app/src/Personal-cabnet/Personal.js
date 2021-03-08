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


export default function Personal() {
    return (
        <div style={{ backgroundColor: "#F6F6F6" }}>
            <div style={{ height: "620px" }}>
                <div style={{ backgroundImage: `url(${advert})`, height: 500, marginTop: 0 }} className="img div-place">
                    <div className="div-flex" style={{ justifyContent: "flex-start", alignItems: "flex-end" }}>
                        <div className="place-name">
                            <img src={myPhoto} className="circle placeholder" ></img>
                            <div className="name-container">
                                <p style={{ color: "#110F0F", fontFamily: "Montserrat", fontSize: 25, margin: 0 }}>beso dvalishvili</p>
                                <Link to="/" style={{ color: "#110F0F", fontFamily: "Montserrat", fontSize: 18, margin: 0 }}>Edit</Link>
                            </div>

                            <div className="logout">
                                <Link to="/" style={{ color: "#110F0F", fontFamily: "Montserrat", fontSize: 18, margin: 0 }}>logout</Link>
                                <Link to="/" style={{ color: "#110F0F", fontFamily: "Montserrat", fontSize: 18, margin: 0 }}>Add Business Account +</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ width: "85%", paddingLeft: "6%" }}>
                <p className="p-color">  ACTIVE POLICIES  </p>



                {/* active policies */}
                <div className="policies">
                    <div style={{ backgroundImage: `url(${chair})`, paddingBottom: "2%" }} className="border">
                        <div className="row">
                            <img src={house} className="icon-wrap"></img>
                            <p className="color">PROPERTY INSURANCE</p>
                            <img src={up}></img>
                        </div>
                        <hr style={{
                            color: "white",
                            backgroundColor: "white",
                            height: 0.5,
                            width: "90%"
                        }} />
                        <div style={{
                            color: "#5C656B",
                            backgroundColor: "white",
                            width: "90%",
                            marginLeft: "5%",
                            borderRadius: 5
                        }} >
                            <div>
                                {/* property insurance */}
                                <div className="wrapper">
                                    <p style={{ fontSize: 20 }}>Property Insurance</p>
                                    <div>
                                        <p style={{ fontSize: 16, margin: 0, paddingBottom: 5 }}>Beso Dvalishvili</p>
                                        <p style={{ fontSize: 16, margin: 0, paddingBottom: 5 }}>Valid Untill: 17/05/21</p>
                                        <p style={{ fontSize: 16, margin: 0, paddingBottom: 5 }}>Police's Number: 009876509</p>
                                        <p style={{ fontSize: 22, margin: 0, paddingBottom: 10, color: "#E84F5B" }}><b>34.00 Gel</b></p>

                                        <div className="btn-position" >
                                            <button className="btn-style" style={{ width: 224, height: 49, fontSize: 24, marginBottom: 10 }}>pay</button>
                                            <Link to="" style={{ fontSize: 20, margin: 0, paddingBottom: 5, color: "#5C656B" }}><b>change payment method</b></Link>
                                        </div>

                                    </div>
                                </div>
                                <div className="wrapper" >
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
                        <Link to=""><img src={bills}></img></Link>
                        <p style={{ fontSize: 26 }}>MY BILLS</p>
                    </div>
                    <div className="links-text">
                        <Link to=""><img src={statements}></img></Link>
                        <p style={{ fontSize: 26 }}>STATEMENTS</p>
                    </div>
                    <div className="links-text">
                        <Link to=""><img src={notifications}></img></Link>
                        <p style={{ fontSize: 26 }}>NOTIFICATIONS</p>
                    </div>
                </div>



            </div>
            <Products />

            <Footer />
        </div>
    )
}