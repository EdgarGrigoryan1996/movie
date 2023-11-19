"use client"
import React, {useState} from 'react';
import s from "./Navbar.module.css"
import {navbarList} from "@/components/Navbar/NavbarList";
import NavbarItem from "@/components/Navbar/NavbarItem";
import Image from "next/image";
import userImg from "../../../public/images/edgar.webp"

function Navbar() {

    const [navbarShowStatus, setNavbarShowStatus] = useState(false)
    const [activeMenu, setActiveMenu] = useState(2)
    const handleShowNavbar = () => {
        setNavbarShowStatus(true)
    }
    const handleHideNavbar = () => {
        setNavbarShowStatus(false)
    }

    return (
        <div className={navbarShowStatus ? s.navbarBlock + " " + s.navbarShow : s.navbarBlock}
             onMouseOver={handleShowNavbar}
             onMouseLeave={handleHideNavbar}
        >

            {
                navbarShowStatus && (
                    <div className={s.userBlock}>
                        <div>
                            <Image src={userImg} alt={"Edgar"} />
                        </div>
                        <div>Edgar</div>
                    </div>
                )
            }

            <ul >
                {navbarList.map((menuItem) => {
                    return (
                        <NavbarItem
                            key={menuItem.id + Math.random()}
                            id={menuItem.id}
                            title={menuItem.title}
                            icon={menuItem.icon }
                            active={activeMenu}
                            setActiveMenu={setActiveMenu}
                            status={navbarShowStatus}/>
                    )
                })}
            </ul>

            {
                navbarShowStatus && (
                    <div className={s.navbarFooter}>
                        <div>Language</div>
                        <div>Get Help</div>
                        <div>Exit</div>
                    </div>
                )
            }

        </div>
    );
}

export default Navbar;