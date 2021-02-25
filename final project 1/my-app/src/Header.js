import alfa from './photos/icon-photo/3.svg'
import './Header.css'
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';
import Burger from "./Components/Burger";
import Menu from "./Components/Menu"
import React, { useState } from 'react';


export default function Header() {
    const [open, setOpen] = useState(false);
    return (
        <div className="background">
            <div className="container ">
                <div className="wrap">
                    <div className="front">
                        <ThemeProvider theme={theme}>
                            <>
                                <div>
                                    <Burger open={open} setOpen={setOpen} />
                                    <Menu open={open} setOpen={setOpen} />
                                </div>
                            </>
                        </ThemeProvider>
                        <img src={alfa} style={{ width: 41 }, { height: 38 }}></img>
                        <h1 style={{ color: "#FFFFFF" }}>ALPHA</h1>
                        <div className="lang">
                            <button className="lang-btn" style={{ backgroundColor: "#E84F5B" }}>EN</button>
                            <button className="lang-btn">GE</button>
                        </div>
                    </div>
                    <div className="end">
                        <h3>INDIVIDUAL</h3>
                        <h3>FOR BUSSINES</h3>
                        <h3>COMPANY</h3>
                        <button className="btn">PERSONAL CABNET</button>
                    </div>
                </div>
            </div>
        </div>
    )
}