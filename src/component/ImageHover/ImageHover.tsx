import { FC, useRef } from "react";
import useHover from '../../hooks/useHover'
import {BiLinkExternal} from 'react-icons/bi'

import styles from './ImageHover.module.scss'
import React from "react";

interface Props{
    urlDep:string,
    photo: string,
    name: string,
}

const ImageHover:FC<Props> =({urlDep,photo,name})=>{
    const hoverRef = useRef(null)
    const isHovered = useHover(hoverRef)

    return (
        <a className={styles.progect__main__href_dep} 
           href={urlDep}
           target="_blank" 
           rel="noreferrer"
           ref={hoverRef}>
            <img className={isHovered ? 
                                    styles.progect__main__image_hover : 
                                    styles.progect__main__image}
                 
                 src={photo}
                 alt={name}>
            </img>
            {isHovered ? <BiLinkExternal className={styles.progect__main__link}/>: ''} 
        </a>)
}

export default ImageHover
