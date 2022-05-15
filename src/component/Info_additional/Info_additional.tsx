import React, { FC } from "react";

import styles from './Info_additional.module.scss'

interface Props{
    name: string,
    value: string,
}

const InfoAdditional:FC<Props> = ({name, value}) =>{
    return(
        <div className={styles.contact}>
            <p className={styles.contact__name}>{name}</p>
            <p className={styles.contact__link}>{value}</p>
        </div>
    )
}
export default InfoAdditional