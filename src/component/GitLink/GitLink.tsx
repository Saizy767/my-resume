import React, { FC } from "react";
import {AiFillGithub} from 'react-icons/ai'

import styles from './GitLink.module.scss'

interface Props{
    urlGit: string,
}

const GitLink:FC<Props> = ({urlGit}) =>{
    return(
        <div className={styles.progect__main__git}>
            <a className={styles.progect__main__href_git} 
                   href={urlGit} 
                   target="_blank" 
                   rel="noreferrer">
                <AiFillGithub/>
                <span>GitHub</span>
            </a>
        </div>
    )
} 

export default GitLink