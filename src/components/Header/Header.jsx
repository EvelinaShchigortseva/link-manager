import React from "react";
import Search from "./Search/Search";
import "./Header.css";
import BasicModal from "../modal/AddLink";
import LogIn from "../LogIn/LogIn";

function Header() {
    return (
        <div className="header">
            <div className="header-top">
                <div>LinkManager</div>
                <Search />
                <BasicModal />
                <LogIn />
            </div>
        </div>
    );
}

export default Header;
