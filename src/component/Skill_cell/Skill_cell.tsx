import React, { FC} from "react";
import styles from './Skill_cell.module.scss'

interface Props{
    title: string,
    value: number,
    color: string,
    logo: Array<any>,
    position:string,
    isVisible: boolean,
    animationTime: string,
}
const SkillCell: FC<Props>=({title,value, color, logo, position, isVisible,animationTime})=>{
    return (
        <div className={styles.skill} style={{right:isVisible ? position: '0%',
                                              display: isVisible? 'block' : ' ',
                                              animationDuration: animationTime}}>
            <div className={styles.skill__box}>
                <div className={styles.skill__title}>
                    <h3 className={styles.skill__language}>{title}</h3>
                    {logo.map((el, index)=>{
                        return(
                            <img className={styles.skill__logo} src={el} key={index} alt='logo'/>
                        )
                    })}
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
        </div>
    )
}

export default SkillCell