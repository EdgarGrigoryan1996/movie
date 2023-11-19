import React from 'react';
import Image from "next/image";
import s from "./Navbar.module.css"

function NavbarItem(props) {

    return (
        <li
            className={(props.id === props.active && props.status) && s.activeShowMenu}
            onClick={() => {props.setActiveMenu(props.id)}}
        >
            <span className={(props.id === props.active && !props.status) && s.activeMenu}>
                <Image src={props.icon} alt={props.title} />
            </span>

            {props.status && <span>{ props.title}</span>}
        </li>
    );

}

export default NavbarItem;