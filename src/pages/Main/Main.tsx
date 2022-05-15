import React, {FC} from "react";
import {Element} from 'react-scroll';

import Parallax from "../../component/Parallax/Parallax";

import styles from './Main.module.scss';

const Main:FC = () => {
    return(
        <Element name='home' className={styles.main}>
            <Parallax/>
        </Element>
    )
}

export default Main