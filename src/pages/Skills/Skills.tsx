import React, { FC, useRef} from "react";
import {Element} from 'react-scroll'

import SkillCell from "../../component/Skill_cell/Skill_cell";
import { Array_Skills, Skill } from "../../api/Skills_api";
import useOnScreen from "../../hooks/useOneScreen";

import styles from './Skills.module.scss'

const Skills :FC = ()=>{
    const skillsRef = useRef(null)
    const isVisible = useOnScreen(skillsRef)
  
    return(
        <Element name='skill' className={styles.skills}>
            <header>
                <h1 className={styles.skills__title}>Skills</h1>
                <hr style={{color:'white'}}/>
            </header>
            <main className={styles.skills__main} ref={skillsRef}>
                {Array_Skills.map((el:Skill)=>{
                    return(
                    <SkillCell key={el.id} {...el} isVisible={isVisible}/>
                    )
                })}
            </main>
        </Element>
    )
}

export default Skills