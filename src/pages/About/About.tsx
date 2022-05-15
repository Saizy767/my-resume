import React, { FC} from "react";
import {Element} from 'react-scroll'

import styles from './About.module.scss'

const About :FC = ()=>{
    return(
        <Element name='about' className={styles.about}>
            <header>
                <h1 className={styles.about__title}>About Me</h1>
                <hr style={{color:'white'}}/>
            </header>
            <main className={styles.about__main}>
                <p className={styles.about__text}>My name is Mikhail Kuklin.</p>
                <p className={styles.about__text}>I am 21 years old</p>
                <p className={styles.about__text}>I started to get involved in programming in 2019 and to this day I am burning with it. 
                    Initially, I studied Python, creating Telegram bots and parsers.
                    But after discovering for myself such a language as JavaScript and its possibilities over websites,
                    I plunged into it. </p>
                <p className={styles.about__text}>To improve my syntax, I began to sit on the Codewars website, solving problems.
                Realizing that the code should not only be working, but also fast and understandable, 
                I began to read articles on Habr and books about algorithms and feature of language that I need to know in order to be a pro.
                </p>
                <p className={styles.about__text}>
                But after discovering for myself such a library as React, and its interactions with DOM elements,
                which increase productivity. I realized that I wanted to delve into this area as deeply as possible.
                By the degree of studying React, I also mastering Redux, TypeScript, Next JS and much more.
                </p>
            </main>
        </Element>
    )
}

export default About