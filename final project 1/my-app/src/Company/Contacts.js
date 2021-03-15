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


export default function ContactsSmall() {

    function show() {
        let show = document.querySelector("#review");
        let background = document.querySelector("#background");
        let year2009 = document.querySelector("#year2009");
        let width = window.matchMedia("(max-width: 950px)");

        if (width.matches && show.style.display === "none") {
            show.style.display = "flex";
            background.style.height = "250px";
            year2009.style.background = "#FFFFFF";
            year2009.style.color = "#E84F5B";
        }

        else if (show.style.display === "none") {
            show.style.display = "flex";
            background.style.height = "350px";
            year2009.style.background = "#FFFFFF";
            year2009.style.color = "#E84F5B";

        }

        else if (width.matches && show.style.display === "flex") {
            show.style.display = "none";
            background.style.height = "120px"
            year2009.style.background = "#E84F5B";
            year2009.style.color = "#FFFFFF";

        }

        else {
            show.style.display = "none";
            background.style.height = "200px"
            year2009.style.background = "#E84F5B";
            year2009.style.color = "#FFFFFF";
        }
    }
    function year() {
        let year = document.querySelector("#year");
        let up = document.querySelector("#up");
        let background = document.querySelector("#background");
        let width = window.matchMedia("(max-width: 950px)");
        let show = document.querySelector("#review");
        let year2009 = document.querySelector("#year2009");

        if (width.matches && year.style.display === "none") {
            year.style.display = "flex";
            up.style.transform = "scaleY(-1)";
            background.style.height = "120px"
        }
        else if (year.style.display === "none") {
            year.style.display = "flex";
            up.style.transform = "scaleY(-1)";
            background.style.height = "200px"
        }
        else {
            year.style.display = "none";
            show.style.display = "none";
            up.style.transform = "scaleY(1)";
            background.style.height = "93px"
            year2009.style.background = "#E84F5B";
            year2009.style.color = "#FFFFFF";
        }
    }
    function contactsF() {
        let contacts = document.querySelector("#hideNShow");
        let upContacts = document.querySelector("#up-contacts");
        if (contacts.style.display === "none") {
            contacts.style.display = "flex";
            upContacts.style.transform = "scaleY(-1)";
        }
        else {
            contacts.style.display = "none";
            upContacts.style.transform = "scaleY(1)";
        }
    }
    return (
        <div className="body">

            {/* contacts */}
            <div >
                <div style={{ backgroundImage: `url(${contacts})`, marginBottom: "2%" }} className="repeat container-h">
                    <div className="contacts-wrap">
                        <div className="row" style={{ justifyContent: "flex-start" }}>
                            <img src={contact} id="contacts-icon"></img>
                            <p className=" margin-left" style={{ fontFamily: "Monserrat", color: "white" }}>CONTACTS</p>
                        </div>
                        <button style={{ background: "none", border: "none", width: 40 }}><img src={up} style={{ width: 40 }} onClick={contactsF} id="up-contacts"></img></button>
                    </div>
                </div>


                <div className="div-cont" id="hideNShow" style={{ display: "none" }}>
                    <div className="contacts-div" >
                        <img src={phone} className="icon-container"></img>
                        <p className="contacts-p">(032) 1 640 640</p>
                    </div>
                    <div className="contacts-div" style={{ opacity: 0.8, fontFamily: "Montserrat" }}>
                        <img src={local} className="icon-container"></img>
                        <p className="contacts-p">Online Consultations</p>
                    </div>
                    <div className="contacts-div" style={{ opacity: 0.6, fontFamily: "Montserrat", margin: 0 }}>
                        <p style={{ margin: "0 2%" }} className="icon-p">@</p>
                        <p className="contacts-p">lnsurance@alpha.ge</p>
                    </div>
                </div>
            </div>

            {/* who we are */}
            <div style={{ backgroundImage: `url(${WeAre})`, marginBottom: "2%" }} className="repeat container-h">
                <div className="contacts-wrap">
                    <div className="row" style={{ justifyContent: "flex-start" }}>
                        <img src={alpha} id="contacts-icon"></img>
                        <p className=" margin-left" style={{ fontFamily: "Monserrat", color: "white" }}>WHO WE ARE</p>
                    </div>
                    <img src={up} style={{ width: 40 }}></img>
                </div>
            </div>

            {/* history */}
            <div style={{ backgroundImage: `url(${history})`, marginBottom: "2%" }} className="container-h repeat" id="background">
                <div className="contacts-wrap">
                    <div className="row" style={{ justifyContent: "flex-start" }}>
                        <img src={historyIcon} id="contacts-icon"></img>
                        <p className="margin-left" style={{ fontFamily: "Monserrat", color: "white" }}>HISTORY</p>
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
            <div style={{ backgroundImage: `url(${carrer})`, marginBottom: "2%" }} className="repeat container-h">
                <div className="contacts-wrap">
                    <div className="row" style={{ justifyContent: "flex-start" }}>
                        <img src={person} id="contacts-icon"></img>
                        <p className="margin-left" style={{ fontFamily: "Monserrat", color: "white" }}>CARRER</p>
                    </div>
                    <img src={up} style={{ width: 40 }}></img>
                </div>
            </div>
        </div >
    )
}