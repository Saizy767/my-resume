import React, {FC, useCallback, useEffect, useRef, useState} from "react";

import styles from './Parallax.module.scss'
import MilkyWay from '../../images/milky_way.jpeg'
import Forest from '../../images/parallax-front.png'
import Person from '../../images/parallax-person.png'
import useOnScreen from "../../hooks/useOneScreen";
import DownloadButton from "../Download_button/Download_button";

const Parallax: FC=() =>{
    const [value, setValue] = useState(0)
    const forestRef = useRef<HTMLImageElement>(null)
    const personRef = useRef<HTMLImageElement>(null)
    const MilkyWayRef = useRef<HTMLImageElement>(null)
    const isVisible = useOnScreen(MilkyWayRef)

    const handleScrool = useCallback(()=>{
            setValue(window.scrollY)
    },[])
    
    useEffect(()=>{
        if(isVisible){
        window.addEventListener('scroll', handleScrool)}
        return ()=> window.removeEventListener('scroll', handleScrool)
    },[handleScrool, isVisible])

  
    useEffect(()=>{
        if (window.innerHeight < 600){
            MilkyWayRef.current.style.left = -value * 0.5 + 'px'
            forestRef.current.style.left  = -value * 0.4 + 'px'
            personRef.current.style.left = value * 0.15 + 'px'
        }
        else{
            MilkyWayRef.current.style.left = -value * 0.05 + 'px'
            forestRef.current.style.left  = -value * 0.5 + 'px'
            personRef.current.style.left = value * 0.25 + 'px'
        }
    },[value])

    return(
        <main className={styles.parallax}> 
            <img src={MilkyWay} alt='Milky way' className={styles.parallax__milkyWay} ref={MilkyWayRef}/>
            <img src={Forest} alt='front parallax' className={styles.parallax__forest} ref={forestRef}/>
            <img src={Person} alt='person' className={styles.parallax__person} ref={personRef}/>
            <DownloadButton/>
        </main>
    )
}
export default Parallax