import React, { FC, useCallback } from "react";
import { BiRightArrow } from "react-icons/bi";

import styles from './ProgectArrow.module.scss'

interface Props{
    isOpen:boolean,
    setIsOpen: (T:boolean) => void
}
const ProgectArrow:FC<Props> = ({isOpen, setIsOpen}) =>{

    const handleDisclosureStack = useCallback(()=>{
        setIsOpen(!isOpen)
    },[isOpen])

    return(
        <div role='button' className={styles.progect__arrow} onClick={handleDisclosureStack}>
            <BiRightArrow className={isOpen ? styles.progect__arrow_up : styles.progect__arrow_down}/>
        </div>
    )
}

export default ProgectArrow