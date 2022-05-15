import React, { FC, useCallback, useEffect, useState } from "react";

import { Stack } from "../../../api/Progects_api";
import ProgectArrow from "../ProgectArrow/ProgectArrow";
import ProgectTechnology from '../ProgectTechnology/ProgectTechnology'

import styles from './ProgectStack.module.scss'

interface Props{
    technology: Stack[],
    isOpenElement: boolean
}
const ProgectStack:FC<Props> = ({technology, isOpenElement}) =>{
    const [isOpenStack, setIsOpenStack] = useState(false)
    useEffect(()=>{
        if(isOpenElement==false){
            setIsOpenStack(false)
        }
    },[isOpenElement])
    const handleDisclosureStack = useCallback(()=>{
        setIsOpenStack(!isOpenStack)
    },[isOpenStack])
    return(
        <div className={styles.progect__stack}>
            <div className={styles.progect__stack__title} onClick={window.innerWidth < 600 ? handleDisclosureStack: null }>
                <ProgectArrow isOpen={isOpenStack} setIsOpen={setIsOpenStack}/>
                <h3 className={styles.progect__stack__title_name}>
                    Stack
                </h3>
            </div>
            <ul className={ isOpenStack && isOpenElement ? styles.progect__stack__technology_up : styles.progect__stack__technology_down}>
                {technology.map((el)=>{
                    return (
                        <ProgectTechnology {...el} key={el.id}/>
                    )
                })}
            </ul>
        </div>
    )
}

export default ProgectStack