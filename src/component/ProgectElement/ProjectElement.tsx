import React, {FC, useRef} from "react";
import styles from './ProgectElement.module.scss'
import useHover from '../../hooks/useHover'
import {AiFillGithub} from 'react-icons/ai'
import {VscLinkExternal} from 'react-icons/vsc'

interface Props{
    photo: any,
    urlGit: string,
    urlDep: string,
    name: string,
    isVisible: boolean,
    topPosition: string,
    progectBorder: string
}
const ProgectElement:FC<Props> = ({photo, urlDep, urlGit, name, isVisible, topPosition,progectBorder})=>{
    const hoverRef = useRef(null)
    const isHovered = useHover(hoverRef)
    return(
        <div className={styles.progect} style={{top: isVisible ? topPosition : '0%',
                                                display: isVisible ? 'block' : 'none',}}
                                                >
            <h3 className={styles.progect__name}>{name}</h3>
            <div className={styles.progect__card}>
                <a href={urlDep} target='_blank' rel="noreferrer" className={styles.progect__image}>
                    <img className={styles.progect__screen} src={photo} alt='website'
                                                                        style={{border: isHovered ?
                                                                                progectBorder : ''}}
                                                                        ref={hoverRef}
                    ></img>
                </a>
            </div>
            <div className={styles.progect__link}>
                <a href={urlGit} target='_blank' rel="noreferrer" className={styles.progect__github}>
                    <AiFillGithub className={styles.progect__github_icon}/>
                    GitHub
                </a>
                <a href={urlDep} target='_blank' rel="noreferrer" className={styles.progect__deploy}>
                    Link
                    <VscLinkExternal className={styles.progect__deploy_icon}/>
                </a>
            </div>
        </div>
    )
}
export default ProgectElement