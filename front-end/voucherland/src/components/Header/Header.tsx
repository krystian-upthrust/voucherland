import React, {useEffect} from "react";
import {ToggleMenu} from "../../utils/actions";
import Nav from "./Nav";

export default function Header() : JSX.Element {

    /**
     * Function that hides the menu in smaller screens,
     * also allows the user to toggle and untoggle it
     */
    useEffect(() => {
        ToggleMenu();
    }, []);

    return (
        <header className="header" data-testid="header">
            <h1 className="header_title_mobile" data-testid="mobile-header">
                voucherland
            </h1>

            {/* nav menu mobile */}
            <div className="nav_menu_mobile close_menu" id="mobile_menu">
                <div className="line"/>
                <div className="line line_sided"/>
                <div className="line"/>
            </div>

            <Nav/>
        </header>
    );
}
