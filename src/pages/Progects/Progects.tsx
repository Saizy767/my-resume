import React, { FC } from "react";
import styles from './Progects.module.scss'
import {Element} from 'react-scroll'
import { Array_Progects, Progect } from "../../api/Progects_api";
import ProgectElement from "../../component/Progect/ProgectElement/ProjectElement";

const Progects:FC=() =>{
    return(
        <Element name='progects' className={styles.progects}>
            <header>
                <h1 className={styles.progects__title}>Progects</h1>
                <hr style={{color:'white'}}/>
            </header>
            <main className={styles.progects__main}>
                {Array_Progects.map((el: Progect)=>{
                    return(
                        <ProgectElement key={el.id} {...el}/>
                    )
                })}
            </main>
        </Element>
    )
}

export default Progects