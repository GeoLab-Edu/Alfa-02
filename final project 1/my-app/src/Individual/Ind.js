import car from "../photos/icon-photo/pexels-photo-1571783.png"
import Liability from "../photos/icon-photo/pexels-photo-532001@2x.png"
import Passenger from "../photos/icon-photo/pexels-photo-1117647@2x.png"
import Automobile from "../photos/icon-photo/pexels-photo-1719648@2x.png"
import Icon from "../photos/icon-photo/drive_eta-24px.svg"
import "./Ind.css"
import conditions from "../photos/icon-photo/Group-338.svg"
import agreements from "../photos/icon-photo/Group-339.svg"
import tarrif from "../photos/icon-photo/Group-337.svg"
import YouNeed from "./YouNeed"
import Footer from "../Footer"


export default function Ind() {
    return (
        <div style={{ backgroundColor: "#F6F6F6" }}>
            <div style={{ backgroundImage: `url(${car})`, marginTop: 0 }} className="img div-place">
                <div className="div-flex" style={{ justifyContent: "flex-start" }}>
                    {/* <div><p>Home> Individual> Auto</p></div> */}
                    <div className="h1" style={{ marginTop: "20%" }}>
                        <p style={{ fontFamily: 'Montserrat', fontSize: "32px" }}>
                            AUTO INSURANCE</p>
                        <hr className="hr" />
                        <p style={{ fontFamily: 'FiraGO', fontSize: "18px" }}>While driving the road is full of surprises. You can protect your finances.</p>
                    </div>
                </div>
            </div>
            <div className="individual-container" style={{ marginTop: "2%" }}>
                <a href="" className="decoration">
                    <div className="img-container">
                        <div className="img-size" style={{ backgroundImage: `url(${Automobile})` }}>
                            <img src={Icon} className="icon"></img>
                        </div>
                        <p style={{ fontFamily: 'Montserrat', fontSize: 24 }} className="decoration">AUTOMOBILE INSURANCE</p>
                    </div>
                </a>
                <a href="" className="decoration">
                    <div className="img-container">
                        <div className="img-size" style={{ backgroundImage: `url(${Liability})` }}>
                            <img src={Icon} className="icon"></img>
                        </div>
                        <p style={{ fontFamily: 'Montserrat', fontSize: 24 }} className="decoration">LIABILITY INSURANCE</p>
                    </div>
                </a>
                <a href="" className="decoration">
                    <div className="img-container">
                        <div className="img-size" style={{ backgroundImage: `url(${Passenger})` }}>
                            <img src={Icon} className="icon"></img>
                        </div>
                        <p style={{ fontFamily: 'Montserrat', fontSize: 24 }} className="decoration">PASSANGER INSURANCE</p>
                    </div>
                </a>
            </div>
            <div className="box">
                <p style={{ fontSize: 16, fontFamily: "Montserrat" }}>While driving the road is full of surprises. You can protect your finances and use 24 hours auto assistant by insuring your car. In case of a car accident, car insurance will help you to repair or change damaged parts of the car and give you the opportunity to return to your normal life in the shortest time.</p>
                <div className="text-right">
                    <ul style={{ fontSize: 18, fontFamily: "Montserrat", paddingLeft: 0 }}>What does Motor Insurance cover?</ul>
                    <li style={{ fontSize: 16, fontFamily: "FiraGO" }}>Vehicle damage as a result of road accident</li>
                    <li style={{ fontSize: 16, fontFamily: "FiraGO" }}>Fires And Explosions</li>
                    <li style={{ fontSize: 16, fontFamily: "FiraGO" }}>Various subjects falling</li>
                    <li style={{ fontSize: 16, fontFamily: "FiraGO" }}>Theft, Robbery, Burglary</li>
                    <li style={{ fontSize: 16, fontFamily: "FiraGO" }}>Theft of external details and accessories</li>
                    <li style={{ fontSize: 16, fontFamily: "FiraGO" }} >Natural disasters (hail, thunder, etc.)</li>
                    <li style={{ fontSize: 16, fontFamily: "FiraGO" }}>Damage of windshield and mirrors</li>
                    <li style={{ fontSize: 16, fontFamily: "FiraGO" }}>Damage of parked car</li>
                    <ul style={{ fontSize: 18, fontFamily: "Montserrat", paddingLeft: 0, display: "flex" }}>We insure all types of vehicles</ul>
                </div>
                <div className="font-display">
                    <div style={{ marginRight: "5%" }}>
                        <img src={conditions}></img>
                        <p className="font-design">conditions</p>
                    </div>
                    <div style={{ marginRight: "5%" }}>
                        <img src={agreements}></img>
                        <p className="font-design">agreements</p>
                    </div>
                    <div style={{ marginRight: "5%" }}>
                        <img src={tarrif}></img>
                        <p className="font-design">tarrif</p>
                    </div>
                </div>
            </div>
            <div className="btn-position">
                <button className="btn-style" >Buy</button>
            </div>
            <YouNeed />
            <Footer />
        </div >
    )
}