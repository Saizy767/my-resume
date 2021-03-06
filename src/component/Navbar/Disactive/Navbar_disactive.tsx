import React ,{FC} from "react";

import {Array_Navbar} from "../../../api/Navbar_api";
import NavbarCell from "../../Navbar_cell/Navbar_cell";

import styles from './Navbar_disactive.module.scss'

const NavbarDisactive : FC = () =>{
    return(
        <div className={styles.navbar}>
            <div className={styles.navbar__user}>
                <span className={styles.navbar__name}>Mikhail Kuklin</span>
            </div>
            {Array_Navbar.map((el)=>{
                return(
                    <NavbarCell {...el} key={el.id}/>
                )
            })}
        </div>
    )
}

export default NavbarDisactive