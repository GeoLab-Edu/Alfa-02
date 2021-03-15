import alfa from './photos/icon-photo/3.svg'
import './Header.css'
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';
import Burger from "./Components/Burger";
import Menu from "./Components/Menu"
import React, { useState } from 'react';
import {
    Link
} from "react-router-dom";


export default function Header() {
    function stayUp() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function langChangeEn() {
        let en = document.querySelector("#en");
        let ge = document.querySelector("#ge");
        if (en.style.backgroundColor === "rgb(232, 79, 91)") {
            ge.style.backgroundColor = "#E84F5B";
            en.style.removeProperty("background-color");
        }
    }
    function langChangeGe() {
        let en = document.querySelector("#en");
        let ge = document.querySelector("#ge");
        if (ge.style.backgroundColor === "rgb(232, 79, 91)") {
            en.style.backgroundColor = "#E84F5B";
            ge.style.removeProperty("background-color");
        }
    }
    const [open, setOpen] = useState(false);
    return (
        <div className="background" style={{ zIndex: '100', position: 'fixed', width: '100%' }}>
            <div className="container ">
                <div className="wrap">


                    <div className="front">
                        <ThemeProvider theme={theme} >
                            <>
                                <div className="none" id="burger">
                                    <Burger open={open} setOpen={setOpen} />
                                    <Menu open={open} setOpen={setOpen} />
                                </div>
                            </>
                        </ThemeProvider>

                        <Link to="/" style={{ textDecoration: "none", display: "flex" }} onClick={stayUp}>
                            <img src={alfa} style={{ width: 40, height: 40 }}></img>
                            <p style={{ color: "white", fontSize: 32, margin: 0 }} className="important">Alpha</p>
                        </Link>
                        <div className="lang">
                            <button className="lang-btn"
                                style={{ backgroundColor: "#E84F5B" }}
                                id="en"
                                onClick={langChangeGe}>EN</button>
                            <button className="lang-btn"
                                id="ge"
                                onClick={langChangeEn}>GE</button>
                        </div>
                    </div>
                    <div className="end div">
                        <div className="div">
                            <Link to="/individual" style={{ textDecoration: "none", color: "white" }} onClick={stayUp}>INDIVIDUAL</Link>
                            <Link to="/individual" style={{ textDecoration: "none", color: "white" }} onClick={stayUp}>FOR BUSSINES</Link>
                            <Link to="/company" style={{ textDecoration: "none", color: "white" }} onClick={stayUp}>COMPANY</Link>

                            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                        </div>
                        <Link to="/personal-cabnet" className="btn" onClick={stayUp}>PERSONAL CABNET</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}