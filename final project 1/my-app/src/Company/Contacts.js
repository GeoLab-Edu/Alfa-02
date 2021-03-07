import contacts from "../photos/icon-photo/Group-417@2x.png"
import WeAre from "../photos/icon-photo/Group-418@2x.png"
import history from "../photos/icon-photo/Group-419@2x.png"
import carrer from "../photos/icon-photo/Group-420@2x.png"
import "./Company.css"
import contact from "../photos/icon-photo/connect_without_contact-24px.svg"
import up from "../photos/icon-photo/keyboard_arrow_down-24px.svg"
import phone from "../photos/icon-photo/phonelink_ring-24px.svg"
import local from "../photos/icon-photo/icons.svg"
import alpha from "../photos/icon-photo/Path-54.svg"
import historyIcon from "../photos/icon-photo/history_edu-24px.svg"
import person from "../photos/icon-photo/accessibility_new-24px.svg"


export default function Contacts() {

    function show() {
        let show = document.querySelector("#review");
        let background = document.querySelector("#background");
        let year2009 = document.querySelector("#year2009");
        if (show.style.display === "none") {
            show.style.display = "flex";
            background.style.height = "350px";
            year2009.style.background = "#FFFFFF";
            year2009.style.color = "#E84F5B";

        }
        else {
            show.style.display = "none";
            background.style.height = "250px"
            year2009.style.background = "#E84F5B";
            year2009.style.color = "#FFFFFF";
        }
    }
    function year() {
        let year = document.querySelector("#year");
        let up = document.querySelector("#up");
        let background = document.querySelector("#background");
        if (year.style.display === "none") {
            year.style.display = "flex";
            up.style.transform = "scaleY(-1)";
            background.style.height = "250px"
        }
        else {
            year.style.display = "none";
            up.style.transform = "scaleY(1)";
            background.style.height = "85px"
        }
    }
    return (
        <div className="body">

            {/* contacts */}
            <div style={{ backgroundImage: `url(${contacts})`, height: 93, marginBottom: "2%" }} className="repeat">
                <div className="contacts-wrap">
                    <div className="row" style={{ justifyContent: "flex-start" }}>
                        <img src={contact}></img>
                        <p className="color margin-left">CONTACTS</p>
                    </div>
                    <img src={up} style={{ width: 40 }}></img>
                </div>
            </div>


            <div className="div-cont">
                <div className="contacts-div" >
                    <img src={phone} className="icon-container"></img>
                    <p style={{ fontSize: 26 }}>(032) 1 640 640</p>
                </div>
                <div className="contacts-div" style={{ opacity: 0.8, fontFamily: "Montserrat" }}>
                    <img src={local} className="icon-container"></img>
                    <p style={{ fontSize: 22 }}>Online Consultations</p>
                </div>
                <div className="contacts-div" style={{ opacity: 0.6, fontFamily: "Montserrat" }}>
                    <p style={{ margin: "0 2% ", fontSize: 60 }}>@</p>
                    <p >lnsurance@alpha.ge</p>
                </div>
            </div>

            {/* who we are */}
            <div style={{ backgroundImage: `url(${WeAre})`, height: 93, marginBottom: "2%" }} className="repeat">
                <div className="contacts-wrap">
                    <div className="row" style={{ justifyContent: "flex-start" }}>
                        <img src={alpha}></img>
                        <p className="color margin-left">WHO WE ARE</p>
                    </div>
                    <img src={up} style={{ width: 40 }}></img>
                </div>
            </div>

            {/* history */}
            <div style={{ backgroundImage: `url(${history})`, height: 93, marginBottom: "2%" }} className="repeat" id="background">
                <div className="contacts-wrap">
                    <div className="row" style={{ justifyContent: "flex-start" }}>
                        <img src={historyIcon}></img>
                        <p className="color margin-left">HISTORY</p>
                    </div>
                    <button style={{ background: "none", border: "none", width: 40 }}><img src={up} id="up" onClick={year}></img></button>
                </div>

                <div className="year-div" id="year" style={{ display: "none" }}>
                    <button className="year" onClick={show} id="year2009">
                        <p className="p-year" >2009</p>
                    </button>
                    <div className="year" >
                        <p className="p-year">2010</p>
                    </div>
                    <div className="year" >
                        <p className="p-year">2011</p>
                    </div>
                    <div className="year" >
                        <p className="p-year">2014</p>
                    </div>
                    <div className="year" >
                        <p className="p-year">2015</p>
                    </div>
                    <div className="year" >
                        <p className="p-year">2016</p>
                    </div>
                    <div className="year" >
                        <p className="p-year">2017</p>
                    </div>
                    <div className="year" >
                        <p className="p-year">2018</p>
                    </div>
                    <div className="year" >
                        <p className="p-year">2019</p>
                    </div>
                </div>
                <div className="year-div" id="review" style={{ display: "none" }}>
                    <p className="p-year" style={{ fontSize: 22 }}>We took over 1/5 of our market share in health insurance and lounched our own hospital network :medalpha" to proide high quality hospital services in 5 regions of georgia</p>
                </div>
            </div>

            {/* carrer */}
            <div style={{ backgroundImage: `url(${carrer})`, height: 93, marginBottom: "2%" }} className="repeat">
                <div className="contacts-wrap">
                    <div className="row" style={{ justifyContent: "flex-start" }}>
                        <img src={person}></img>
                        <p className="color margin-left">CARRER</p>
                    </div>
                    <img src={up} style={{ width: 40 }}></img>
                </div>
            </div>
        </div >
    )
}