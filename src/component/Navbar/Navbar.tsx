import React, {FC, useCallback, useRef} from "react";
import {FaBars} from 'react-icons/fa'

import NavbarActive from "./Active/Navbar_active";
import {useTypedSelector} from '../../hooks/useTypedSelector'
import { useTypedDispatch } from "../../hooks/useTypedDispatch";
import NavbarDisactive from "./Disactive/Navbar_disactive";
import { clickSlice } from "../../store/reducers/NavbarClickReducer";
import useHover from "../../hooks/useHover";

import styles from './Navbar.module.scss'

const Navbar: FC = () => {
    const {cellClick} = clickSlice.actions
    const {NavbarClick} = useTypedSelector((state)=>state.clickSlice)
    const dispatch = useTypedDispatch()
    const asideRef = useRef(null)
    const isHover = useHover(asideRef)


    const handleClick=useCallback(()=>{
        dispatch(cellClick(!NavbarClick))
    },[dispatch, cellClick, NavbarClick])
    
    return(
        <aside className={NavbarClick ? 
                        (isHover? styles.navbar_active_hover : styles.navbar_active) 
                        : styles.navbar_disactive} ref={asideRef}>
            <div role='button' className={styles.navbar__bars}>
                <FaBars className={styles.navbar__bars_icon} onClick={handleClick}/>
            </div>
            {NavbarClick ? <NavbarActive/> : <NavbarDisactive/>} 
        </aside>
    )
}

export default Navbar

