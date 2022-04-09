import React, { FC, useRef } from "react";
import useHover from "../../hooks/useHover";
import styles from './Info_main.module.scss'

interface Props{
    colorContact: string,
    name: string,
    link: string,
    value: string,
}
const InfoMain:FC<Props> = ({colorContact, name, link, value}) => {
    const hoverRef = useRef(null)
    const isHovered = useHover(hoverRef)
    return(
        <div className={styles.contact}>
            <p className={styles.contact__name} style={{color: isHovered ? colorContact : ''}}>{name}</p>
                <a href={link} className={styles.contact__link} target="_blank"
                                                                    rel="noreferrer">
                    <p className={styles.contact__value} ref={hoverRef}>{value}</p>
                </a>
        </div>
    )
}
export default InfoMain