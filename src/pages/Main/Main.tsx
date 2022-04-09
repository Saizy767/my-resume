import React, {FC} from "react";
import styles from './Main.module.scss';
import backgroundVideoWEBM from '../../video/background.webm'
import backgroundVideoMP4 from '../../video/background.mp4'
import DownloadButton from "../../component/Download_button/Download_button";
import {Element} from 'react-scroll';

const Main:FC = () => {
    return(
        <Element name='home'>
            <section className={styles.main}>
                <video className={styles.video} autoPlay muted loop>
                    <source src={backgroundVideoWEBM} type="video/webm"/>  
                    <source src={backgroundVideoMP4} type="video/mp4"/>  
                </video>
                <DownloadButton/>
            </section>
        </Element>
    )
}

export default Main