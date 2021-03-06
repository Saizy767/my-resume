import React, { FC} from "react";
import {Element} from 'react-scroll'

import { Array_Additioanlly, Array_Info } from "../../api/Contacts_api";
import InfoMain from "../../component/Info_main/Info_main";
import InfoAdditional from "../../component/Info_additional/Info_additional";

import styles from './Contacts.module.scss'

const Contacts :FC = ()=>{
    return(
        <Element name='contacts' className={styles.contacts}>
            <header>
                <h1 className={styles.contacts__title}>Contacts</h1>
                <hr style={{color:'white'}}/>
            </header>
            <main className={styles.contacts__main}>
                <p className={styles.contacts__info_text}>Information</p>
                <div className={styles.contacts__info}>
                    {Array_Info.map((el)=>{
                        return(
                            <InfoMain key={el.id} {...el} />
                            )
                        })}
                </div>
                <p className={styles.contacts__info_text}>Additional information</p>
                <div className={styles.contacts__info}>
                    {Array_Additioanlly.map((el)=>{
                        return(
                            <InfoAdditional key={el.id} {...el}/>
                            )
                        })}
                </div>
                <hr style={{color:'white'}}/>
            </main>
        </Element>
    )
}

export default Contacts