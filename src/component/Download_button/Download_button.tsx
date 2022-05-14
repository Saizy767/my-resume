import React, {FC} from "react";
import CustomLink from "../Custom_link/Custom_link";
import {AiOutlineDownload} from 'react-icons/ai'

import styles from './Download_button.module.scss'

const DownloadButton: FC=()=>{
    return(
        <CustomLink to={'/pdf'} target="_blank" download="Mikhail_Kuklin__Frontend">
            <div role='button' className={styles.button} >
                <AiOutlineDownload className={styles.button__icon}/>
                <span className={styles.button__text}>Download PDF</span>
            </div>
        </CustomLink>
    )
}

export default DownloadButton