import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import styles from './Skills.module.scss'
import {Element} from 'react-scroll'
import SkillCell from "../../component/Skill_cell/Skill_cell";
import { Array_Skills } from "../../api/Skills_api";
import useOnScreen from "../../hooks/useOneScreen";

const Skills :FC = ()=>{
    const [value, setValue] = useState(0)
    const skillsRef = useRef(null)
    const isVisible = useOnScreen(skillsRef)
    const PageRef = useRef(null)

    const handleScrool = useCallback(()=>{
        setValue(window.scrollY)
    },[])
    useEffect(()=>{
        window.addEventListener('scroll', handleScrool)
        return ()=>{ window.removeEventListener('scroll', handleScrool)}
    },[handleScrool])
    
    return(
        <Element name='skill'>
            <section className={styles.skills} ref={PageRef}>
                <h1 className={styles.skills__title}>Skills</h1>
                <hr style={{color:'white'}}/>
                <main className={styles.skills__main} ref={skillsRef}>
                    {isVisible && Array_Skills.map((el)=>{
                        return(
                        <SkillCell key={el.id} {...el} isVisible={isVisible}/>
                        )
                    })}
                </main>
            </section>
        </Element>
    )
}

export default Skills