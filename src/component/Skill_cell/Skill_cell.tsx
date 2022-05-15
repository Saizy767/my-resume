import React, { FC} from "react";

import styles from './Skill_cell.module.scss'

interface Props{
    title: string,
    value: number,
    color: string,
    logo: string,
    position:string,
    isVisible: boolean,
    animationTime: string,
    
}
const SkillCell: FC<Props>=({title,value, color, logo, position, isVisible})=>{
    return (
        <div className={styles.skill} style={{transform:isVisible ? `translateX(${position})`: '',
                                              animationName: isVisible? '': 'none' ,
                                              }}>
          
            <img className={styles.skill__logo} src={logo} alt={title}/>
            <div className={styles.skill__title}>
                <h3 className={styles.skill__language}>{title}</h3>
            </div>
            <div className={styles.skill__value}>
                {[...Array(5)].map((el, index)=>{
                    index+=1
                    return(
                        <div className={styles.skill__dash} key={index}
                                                            style={{backgroundColor:
                                                            value>=index ? color : 'black' }}>
                        </div>
                    )
                })}
                </div>
        </div>
    )
}

export default SkillCell