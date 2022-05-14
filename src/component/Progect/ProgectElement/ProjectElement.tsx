import React, {FC, useCallback, useState} from "react";
import styles from './ProgectElement.module.scss'
import GitLink from '../../GitLink/GitLink'
import ProgectArrow from '../ProgectArrow/ProgectArrow'
import ImageHover from '../../ImageHover/ImageHover'
import ProgectStack from '../ProgectStack/ProgectStack'
import { Stack } from "../../../api/Progects_api";

interface Props{
    photo: string,
    urlGit: string,
    urlDep: string,
    name: string,
    technology: Stack[],
    activeProgect: string,
    isDeploy:boolean,
}

const ProgectElement:FC<Props> = ({photo, urlDep, 
                                   urlGit, name,
                                   activeProgect, isDeploy,
                                   technology})=>{
    const [isOpen, setIsOpen] = useState(false)

    const handleDisclosureElement = useCallback(()=>{
        setIsOpen(!isOpen)
    },[isOpen])
    return(
       <div className={styles.progect}>
            <div className={styles.progect__box} onClick={window.innerWidth < 600 ? handleDisclosureElement: null }>
                <ProgectArrow isOpen={isOpen} setIsOpen={setIsOpen}/>
                <h2 className={styles.progect__name} style={{color: isOpen ? activeProgect : 'white'}}>
                    {name}
                </h2>
            </div>
                <div className={isOpen ? styles.progect__main_up : styles.progect__main_down}>
                    {!isDeploy && 
                        <h3 className={styles.progect__main_warning}>
                            This project is not deployed
                        </h3>}
                        {!isDeploy ? 
                            <img className={styles.progect__main__image} src={photo} alt={name}></img> 
                            :
                            <ImageHover urlDep={urlDep} photo={photo} name={name}/>
                        }
                        <GitLink urlGit={urlGit} />
                        <ProgectStack technology={technology} isOpenElement={isOpen} />
                </div>
       </div>
    )
}
export default ProgectElement