import React from 'react';
import { StyledMenu } from './Menu.styled';
import { bool } from 'prop-types';
import argo from "../../photos/icon-photo/11111.svg"
import liability from "../../photos/icon-photo/1111.svg"
import cargo from "../../photos/icon-photo/111.svg"
import property from "../../photos/icon-photo/11.svg"
import transport from "../../photos/icon-photo/1.svg"
import others from "../../photos/icon-photo/2.svg"
import bank from "../../photos/icon-photo/22.svg"
import propertyHouse from "../../photos/icon-photo/222.svg"
import travel from "../../photos/icon-photo/2222.svg"
import authomobile from "../../photos/icon-photo/22222.svg"
import health from "../../photos/icon-photo/222222.svg"
import whoWeAre from "../../photos/icon-photo/3.svg"
import history from "../../photos/icon-photo/33.svg"
import career from "../../photos/icon-photo/333.svg"
import contacts from "../../photos/icon-photo/3333.svg"
import "./MenuBurger.css"
import { Link } from 'react-router-dom';
import search from "../../photos/icon-photo/search-24px (1).svg"



const Menu = ({ open }) => {
    function Pscroll() {
        let secondDiv = document.querySelector("#second-div")
        let scroll = document.querySelector("#up-down");
        if (secondDiv.style.display === "none") {
            secondDiv.style.display = "flex"
            scroll.style.transform = "rotate(180deg)"
        }
        else {
            secondDiv.style.display = "none"
            scroll.style.transform = "rotate(0deg)"
        }
    }
    function Fscroll() {
        let thirdDiv = document.querySelector("#third-div")
        let scroll = document.querySelector("#up-down1");
        if (thirdDiv.style.display === "none") {
            thirdDiv.style.display = "flex"
            scroll.style.transform = "rotate(180deg)"
        }
        else {
            thirdDiv.style.display = "none"
            scroll.style.transform = "rotate(0deg)"
        }
    }

    function langChangeEn() {
        for (let i = 1; i <= 2; i++) {
            let en = document.querySelector(`#en${i}`);
            let ge = document.querySelector(`#ge${i}`);
            if (en.style.backgroundColor === "rgb(232, 79, 91)") {
                ge.style.backgroundColor = "#E84F5B";
                ge.style.color = "white"
                en.style.color = "black"
                en.style.removeProperty("background-color");
            }
        }
    }
    function langChangeGe() {
        for (let i = 1; i <= 2; i++) {
            let en = document.querySelector(`#en${i}`);
            let ge = document.querySelector(`#ge${i}`);
            if (ge.style.backgroundColor === "rgb(232, 79, 91)") {
                en.style.backgroundColor = "#E84F5B";
                en.style.color = "white"
                ge.style.color = "black"
                ge.style.removeProperty("background-color");
            }
        }
    }
    return (
        <StyledMenu open={open} id="menu">
            <div className="menu-container">
                {/* <Header /> */}
                <div className="menu-background">
                    <div className="menu-alpha-container">
                        <Link to="/" style={{ textDecoration: "none", display: "flex" }}>
                            <img src={whoWeAre} style={{ width: 40, height: 40 }}></img>
                            <p style={{ color: "#707070", fontSize: 32, margin: 0 }} className="important">ALPHA</p>
                        </Link>
                        <div className="menu-alpha-container" style={{ width: "25%" }} id="lang">
                            <button className="lang-btn"
                                id="en1"
                                style={{ backgroundColor: "#E84F5B" }}
                                onClick={langChangeGe}>EN</button>
                            <button className="lang-btn"
                                id="ge1"
                                style={{ color: "black" }}
                                onClick={langChangeEn}>GE</button>
                        </div>
                    </div>

                    <div className="menu-end div">
                        <div className="div">
                            <a href="/individual" style={{
                                textDecoration: "none",
                                color: "black"
                            }}
                                className="menu-p-size"
                            >INDIVIDUAL</a>
                            <a href="/individual" style={{
                                textDecoration: "none",
                                color: "black"
                            }}
                                className="menu-p-size">FOR BUSSINES</a>
                            <a href="/company" style={{
                                textDecoration: "none",
                                color: "black"
                            }}
                                className="menu-p-size">COMPANY</a>
                        </div>
                        <a href="/personal-cabnet" className="btn" >PERSONAL CABNET</a>
                    </div>
                </div>


                {/* search  */}

                <form id="search-form">
                    <input type="text" name="complete" className="partial-steps personal-input text" id="input-search" />
                    <img type="submit" class="submit usd" src={search} id="search"></img>
                </form>

                <div className="menu-wrapper" >

                    {/* personal-scroll down up  */}
                    <div className="personal-scroll-container" id="personal-scroll">
                        <div className="burger-menu-wrap " id="personal-scroller" style={{ padding: "1% 0 1% 0" }}>
                            <a href="/personal-cabnet" className="a-display a">
                                <img src={career} className="image-padding"></img>
                                <p className="p-display" style={{ fontSize: 16, fontFamily: "Montserrat" }}>Personal</p>

                            </a>
                        </div>
                        <button style={{
                            backgroundColor: "white",
                            border: "none"
                        }}><p style={{
                            color: "#E84F5B",
                            fontFamily: "FiraGO",
                            textAlign: "center",
                        }}
                            onClick={Pscroll} id="up-down">^</p></button>
                    </div>

                    <hr style={{
                        backgroundColor: "#5C656B",
                        height: 0.5,
                        width: "100%"
                    }} id="hr" />

                    {/* first-div */}
                    <div className="burger-menu-wrap" id="first-div">
                        <a href="/" className="a-display a">
                            <img src={argo} className="image-padding"></img>
                            <p className="p-display">Argo</p>
                        </a>
                        <a href="/" className="a-display a">
                            <img src={liability} className="image-padding"></img>
                            <p className="p-display">Liability</p>
                        </a>
                        <a href="/" className="a-display a">
                            <img src={cargo} className="image-padding"></img>
                            <p className="p-display">Cargo</p>
                        </a>
                        <a href="/" className="a-display a">
                            <img src={property} className="image-padding"></img>
                            <p className="p-display">Property</p>
                        </a>
                        <a href="/" className="a-display a">
                            <img src={transport} className="image-padding"></img>
                            <p className="p-display">Transport</p>
                        </a>
                        <a href="/" className="a-display a">
                            <img src={others} className="image-padding"></img>
                            <p className="p-display">Others</p>
                        </a>
                    </div>

                    {/* second-div */}

                    <div className="burger-menu-wrap" id="second-div" style={{ display: "none" }}>
                        <a href="/" className="a-display a">
                            <img src={propertyHouse} className="image-padding"></img>
                            <p className="p-display">Property</p>
                        </a>
                        <a href="/" className="a-display a">
                            <img src={authomobile} className="image-padding"></img>
                            <p className="p-display">Automobile</p>
                        </a>
                        <a href="/" className="a-display a">
                            <img src={travel} className="image-padding"></img>
                            <p className="p-display">Travel</p>
                        </a>
                        <a href="/" className="a-display a">
                            <img src={health} className="image-padding"></img>
                            <p className="p-display">Health</p>
                        </a>
                        <a href="/" className="a-display a">
                            <img src={bank} className="image-padding"></img>
                            <p className="p-display">Bank</p>
                        </a>
                        <a href="/" className="a-display a">
                            <img src={others} className="image-padding"></img>
                            <p className="p-display">Others</p>
                        </a>
                        <hr style={{
                            backgroundColor: "#5C656B",
                            height: 0.5,
                            width: "100%"
                        }} id="hr" />
                    </div>

                    {/* for bussines-scroll  */}

                    <div className="personal-scroll-container" id="for-bussines-scroll">
                        <div className="burger-menu-wrap " id="personal-scroller" style={{ padding: "1% 0 1% 0" }}>
                            <a href="/individual" className="a-display a">
                                <img src={property} className="image-padding"></img>
                                <p className="p-display" style={{ fontSize: 16, fontFamily: "Montserrat" }}>For Bussines</p>

                            </a>
                        </div>
                        <button style={{
                            backgroundColor: "white",
                            border: "none"
                        }}><p style={{
                            color: "#E84F5B",
                            fontFamily: "FiraGO",
                            textAlign: "center",
                        }}
                            onClick={Fscroll} id="up-down1">^</p></button>
                    </div>

                    <hr style={{
                        backgroundColor: "#5C656B",
                        height: 0.5,
                        width: "100%"
                    }} id="hr" />

                    {/* third-div */}

                    <div className="burger-menu-wrap" id="third-div" style={{ display: "none" }}>
                        <a href="/" className="a-display a">
                            <img src={contacts} className="image-padding"></img>
                            <p className="p-display">Contacts</p>
                        </a>
                        <a href="/" className="a-display a">
                            <img src={whoWeAre} className="image-padding"></img>
                            <p className="p-display">Who We Are</p>
                        </a>
                        <a href="/" className="a-display a">
                            <img src={history} className="image-padding"></img>
                            <p className="p-display">History</p>
                        </a>
                        <a href="/" className="a-display a">
                            <img src={career} className="image-padding"></img>
                            <p className="p-display">Carrer</p>
                        </a>
                        <hr style={{
                            backgroundColor: "#5C656B",
                            width: "100%"
                        }} id="hr" />
                    </div>

                    {/* personal cabnet  */}
                    <div className="burger-menu-wrap" id="forth-div" >
                        <a href="/" className="a-display a">
                            <img src={propertyHouse} className="image-padding"></img>
                            <p className="p-display">Personal Cabnet</p>
                        </a>
                        <a href="/" className="a-display a">
                            <img src={authomobile} className="image-padding"></img>
                            <p className="p-display">Add Business Account</p>
                        </a>
                        <a href="/" className="a-display a">
                            <img src={travel} className="image-padding"></img>
                            <p className="p-display">Payment</p>
                        </a>
                        <a href="/" className="a-display a">
                            <img src={health} className="image-padding"></img>
                            <p className="p-display">Statement</p>
                        </a>
                        <a href="/" className="a-display a">
                            <img src={bank} className="image-padding"></img>
                            <p className="p-display">Notifications</p>
                        </a>
                        <hr style={{
                            backgroundColor: "#5C656B",
                            height: 0.5,
                            width: "100%"
                        }} id="hr" />
                    </div>

                    {/* language  */}

                    <div className="menu-alpha-container" style={{ width: "100%" }} id="after-lang">
                        <button className="lang-btn"
                            id="ge2"
                            onClick={langChangeEn}
                            style={{
                                color: "black",
                                marginRight: "2%"
                            }}>GE</button>
                        <button className="lang-btn"
                            id="en2"
                            style={{ backgroundColor: "#E84F5B" }}
                            onClick={langChangeGe}>EN</button>
                    </div>

                </div>
            </div>
        </StyledMenu >
    )
}
Menu.propTypes = {
    open: bool.isRequired,
}
export default Menu;