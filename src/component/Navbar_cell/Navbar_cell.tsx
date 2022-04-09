import React,{FC, useCallback, useRef} from "react";
import useHover from "../../hooks/useHover";
import {Link} from 'react-scroll'
import styles from './Navbar_cell.module.scss'
import { clickSlice } from "../../store/reducers/NavbarClickReducer";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useTypedDispatch } from "../../hooks/useTypedDispatch";

interface Props{
    color: string,
    image: JSX.Element,
    title: string,
    toPage: any,
}

const NavbarCell:FC<Props> =({color,image,title, toPage, })=>{
    const hoverRef = useRef(null)
    const isHovered = useHover(hoverRef)

    const {cellClick} = clickSlice.actions
    const {NavbarClick} = useTypedSelector(state=>state.clickSlice)
    const dispatch = useTypedDispatch()

    const handleClick=useCallback(()=>{
        if (window.innerWidth <= 600){
            dispatch(cellClick(!NavbarClick))
        }
    },[dispatch, cellClick, NavbarClick])
    
    return( 
        <Link to={toPage} smooth={true} spy={true}>
            <div className={styles.cell} ref={hoverRef}
                                        style={{backgroundColor: isHovered ? color: 'rgb(30, 30, 30)'}}
                                        onClick={handleClick}
                                        >
                {image}
                <span className={styles.cell__title}>{title}</span>
            </div>
        </Link>
    )
}

export default NavbarCell