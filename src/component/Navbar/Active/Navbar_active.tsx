import React ,{FC, useRef} from "react";
import {Array_Navbar} from "../../../api/Navbar_api";
import useHover from "../../../hooks/useHover";
import NavbarCell from "../../Navbar_cell/Navbar_cell";

import styles from './Navbar_active.module.scss'


const NavbarActive : FC = () =>{
    const NavbarRef = useRef(null)
    const isHover = useHover(NavbarRef)

    return(
            <div className={isHover ? styles.navbar_hover : styles.navbar} ref={NavbarRef}>
                <div className={styles.navbar__box}>
                    <header className={styles.navbar__user}>
                        <span className={styles.navbar__name}>Mikhail Kuklin</span>
                    </header>
                    {Array_Navbar.map((el)=>{
                        return(
                            <NavbarCell {...el} key={el.id}/>
                        )
                    })}
                </div>
            </div>
    )
}

export default NavbarActive