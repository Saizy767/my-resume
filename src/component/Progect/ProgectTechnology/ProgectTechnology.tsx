import React, { FC, useRef } from "react";

import useHover from "../../../hooks/useHover";

import styles from './ProgectTechnology.module.scss'

interface Props{
    name: string,
    color: string
}
const ProgectTechnology:FC<Props> = ({name, color}) =>{
    const technologyRef = useRef(null)
    const isHover = useHover(technologyRef)
    return(
        <li>
            <p className={styles.progect__stack__technology_name} style={{color: isHover ? color : 'white'}} ref={technologyRef}>
                {name}
            </p>
        </li>
    )
}

export default ProgectTechnology