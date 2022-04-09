import React, { FC, useRef } from "react";
import styles from './Progects.module.scss'
import {Element} from 'react-scroll'
import { Array_Progects } from "../../api/Progects_api";
import ProgectElement from "../../component/ProgectElement/ProjectElement";
import useOneScreen from '../../hooks/useOneScreen'

const Progects:FC=() =>{
    const ProgectsRef = useRef(null)
    const isVisible = useOneScreen(ProgectsRef)
    return(
        <Element name='progects'>
            <section className={styles.progects}>
                <h1 className={styles.progects__title}>Progects</h1>
                <hr style={{color:'white'}}/>
                <main className={styles.progects__main} ref={ProgectsRef}>
                    {Array_Progects.map((el)=>{
                        return(
                            <ProgectElement key={el.id} {...el} isVisible={isVisible}/>
                        )
                    })}
                </main>
            </section>
        </Element>
    )
}

export default Progects