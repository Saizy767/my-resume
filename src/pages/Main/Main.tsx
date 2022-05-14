import React, {FC} from "react";
import styles from './Main.module.scss';
import {Element} from 'react-scroll';
import Parallax from "../../component/Parallax/Parallax";

const Main:FC = () => {
    return(
        <Element name='home' className={styles.main}>
            <Parallax/>
        </Element>
    )
}

export default Main