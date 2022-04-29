import React, {FC, useCallback, useEffect, useRef, useState} from "react";
import styles from './Parallax.module.scss'
import MilkyWay from '../../images/milky_way.jpeg'
import Forest from '../../images/parallax-front.png'
import Person from '../../images/parallax-person.png'

interface Props{
    isVisible:boolean
}
const Parallax: FC<Props>=({isVisible}) =>{
    const [value, setValue] = useState(0)
    const forestRef = useRef(null)
    const personRef = useRef(null)
    const MilkyWayRef = useRef(null)

    const handleScrool = useCallback(()=>{
            setValue(window.scrollY)
        },[])
    

    useEffect(()=>{
        if(isVisible){
        window.addEventListener('scroll', handleScrool)}
        return ()=> window.removeEventListener('scroll', handleScrool)
    },[handleScrool, isVisible])

  
    useEffect(()=>{
        if (window.innerHeight< 600){
            MilkyWayRef.current.style.left = -value * 0.1 + 'px'
            forestRef.current.style.left  = -value * 1.5 + 'px'
            personRef.current.style.left = value * 0.5 + 'px'
        }
        else{
            
            MilkyWayRef.current.style.left = -value * 0.05 + 'px'
            forestRef.current.style.left  = -value * 0.5 + 'px'
            personRef.current.style.left = value * 0.25 + 'px'
        }
    },[value])

    return(
        <>  
            <img src={MilkyWay} alt='Milky way' className={styles.parallax__milkyWay} ref={MilkyWayRef}/>
            <img src={Forest} alt='front parallax' className={styles.parallax__forest} ref={forestRef}/>
            <img src={Person} alt='person' className={styles.parallax__person} ref={personRef}/>
            
        </>
    )
}
export default Parallax