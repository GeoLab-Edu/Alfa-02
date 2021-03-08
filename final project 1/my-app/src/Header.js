import alfa from './photos/icon-photo/3.svg'
import './Header.css'
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';
import Burger from "./Components/Burger";
import Menu from "./Components/Menu"
import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Body from './Body';
import Ind from './Individual/Ind';


export default function Header() {
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
                        <img src={alfa} style={{ width: 41 }, { height: 38 }}></img>

                        <Link to="/" tyle={{ textDecoration: "none" }}>
                            <p style={{ color: "white", fontSize: 32 }} className="important">ALPHA</p>
                        </Link>
                        <div className="lang">
                            <button className="lang-btn" style={{ backgroundColor: "#E84F5B" }}>EN</button>
                            <button className="lang-btn">GE</button>
                        </div>
                    </div>
                    <div className="end div">
                        <div className="div">
                            <Link to="/individual" style={{ textDecoration: "none", color: "white" }}>INDIVIDUAL</Link>
                            <Link to="/individual" style={{ textDecoration: "none", color: "white" }}>FOR BUSSINES</Link>
                            <Link to="/company" style={{ textDecoration: "none", color: "white" }}>COMPANY</Link>

                            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                        </div>
                        <Link to="/personal-cabnet" className="btn" >PERSONAL CABNET</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}