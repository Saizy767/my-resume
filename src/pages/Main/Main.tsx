import React, {FC, useRef} from "react";
import styles from './Main.module.scss';
import DownloadButton from "../../component/Download_button/Download_button";
import {Element} from 'react-scroll';
import Parallax from "../../component/Parallax/Parallax";
import useOnScreen from "../../hooks/useOneScreen";

const Main:FC = () => {
    const skillsRef = useRef(null)
    const isVisible = useOnScreen(skillsRef)
    return(
        <section className={styles.main} ref={skillsRef}>
            <Element name='home'>
                <Parallax isVisible={isVisible}/>
                <DownloadButton/>
            </Element>
        </section>
    )
}

export default Main