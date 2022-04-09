import React, {FC, useCallback} from "react";
import NavbarActive from "./Navbar_active";
import {FaBars} from 'react-icons/fa'
import {useTypedSelector} from '../../hooks/useTypedSelector'

import styles from './Navbar.module.scss'
import NavbarDisactive from "./Navbar_disactive";
import { useTypedDispatch } from "../../hooks/useTypedDispatch";
import { clickSlice } from "../../store/reducers/NavbarClickReducer";

const Navbar: FC = () => {
    const {cellClick} = clickSlice.actions
    const {NavbarClick} = useTypedSelector(state=>state.clickSlice)
    const dispatch = useTypedDispatch()

    const handleClick=useCallback(()=>{
        dispatch(cellClick(!NavbarClick))
    },[dispatch, cellClick, NavbarClick])
    console.log(NavbarClick)
    return(
        <>
            <FaBars className={styles.navbar__bars} onClick={handleClick}/>
            {NavbarClick ? <NavbarActive/> : <NavbarDisactive/>}
        </>
    )
}

export default Navbar

