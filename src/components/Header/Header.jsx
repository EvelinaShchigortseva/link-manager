import React from "react";
import Search from "./Search/Search";
import "./Header.css";
import AddLink from "./AddLink/AddLink";

// function Header() {
//     return (
//         <div className="header">
//             <div className="header-top">
//                 <Search />
//                 <AddLink />
//             </div>
//             <div className="header-top">
//                 <span>Все закладки</span>
//                 <span>Сортировка</span>
//                 <span>Вид</span>
//             </div>
//         </div>
//     );
// }
function Header() {
    return (
        <div className="header">
            <div className="header-top">
                <div>LinkManager</div>
                <Search />
                <AddLink />
                <span>UserInformation</span>
            </div>
            {/*<div className="header-top">*/}
            {/*    <span>Все закладки</span>*/}
            {/*    <span>Сортировка</span>*/}
            {/*    <span>Вид</span>*/}
            {/*</div>*/}
        </div>
    );
}

export default Header;


