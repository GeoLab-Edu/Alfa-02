import Header from "./Header";
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';
import Burger from "./Components/Burger";
import Menu from "./Components/Menu"
import React, { useState } from 'react';

export default function Body() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Header />
        </div>

    )
}