import React, {FC} from "react";
import CustomLink from "../Custom_link/Custom_link";
import resume from '../../files/Mikhail_Kuklin__Frontend.pdf'
import {AiOutlineDownload} from 'react-icons/ai'

import styles from './Download_button.module.scss'

const DownloadButton: FC=()=>{
    return(
        <CustomLink to={resume} target="_blank" download>
            <div className={styles.button}>
                <AiOutlineDownload className={styles.button__icon}/>
                <span className={styles.button__text}>Download PDF</span>
            </div>
        </CustomLink>
    )
}

export default DownloadButton