import React, { FC, useRef} from "react";
import styles from './Skills.module.scss'
import {Element} from 'react-scroll'
import SkillCell from "../../component/Skill_cell/Skill_cell";
import { Array_Skills, Skill } from "../../api/Skills_api";
import useOnScreen from "../../hooks/useOneScreen";

const Skills :FC = ()=>{
    const skillsRef = useRef(null)
    const isVisible = useOnScreen(skillsRef)
    const PageRef = useRef(null)
    return(
        <Element name='skill'>
            <section className={styles.skills} ref={PageRef}>
                <h1 className={styles.skills__title}>Skills</h1>
                <hr style={{color:'white'}}/>
                <main className={styles.skills__main} ref={skillsRef}>
                    {isVisible && Array_Skills.map((el:Skill)=>{
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