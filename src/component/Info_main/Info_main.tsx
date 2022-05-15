import React, { FC, useRef } from "react";
import useHover from "../../hooks/useHover";
import styles from './Info_main.module.scss'

interface Props{
    colorContact: string,
    name: string,
    link: string,
    value: string,
    cursor: string,
}
const InfoMain:FC<Props> = ({colorContact, name, link, value, cursor}) => {
    const hoverRef = useRef(null)
    const isHovered = useHover(hoverRef)
    return(
        <div className={styles.contact}>
            <p className={styles.contact__name} style={{color: isHovered ? colorContact : ''}}>{name}</p>
                {link ?
                    <a href={link} className={styles.contact__link} style={{cursor: cursor}}
                                                                    target="_blank"
                                                                    rel="noreferrer">
                        <p className={styles.contact__value} ref={hoverRef}>{value}</p>
                    </a>
                    :
                    <a className={styles.contact__link} style={{cursor: cursor}}
                                                                target="_blank"
                                                                rel="noreferrer">
                    <p className={styles.contact__value} ref={hoverRef}>{value}</p>
                </a>
                }
        </div>
    )
}
export default InfoMain