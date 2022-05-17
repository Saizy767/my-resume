import React, { FC, useEffect, useState } from "react";
import { BsFlower1 } from "react-icons/bs";
import { useTypedDispatch } from "../../hooks/useTypedDispatch";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import MilkyWay from '../../images/milky_way.jpeg'
import Forest from '../../images/parallax-front.png'
import Person from '../../images/parallax-person.png'
import {setImgsLoaded} from '../../store/reducers/ImageLoaderReducer'

import styles from './Loader.module.scss'

const Loader:FC = () =>{
    const [Point, setPoint] = useState(1)
    const ImageArray:string[] = [MilkyWay, Forest, Person]
    const {Loaded} = useTypedSelector((state)=> state.imageLoaderSlice)
    const dispatch = useTypedDispatch()

    useEffect(()=>{
        const loadImage = (image: string) => {
            return new Promise((res, rej)=>{
                const loadImg = new Image();
                loadImg.src = image;
                loadImg.onload = () =>
                setTimeout(() => {
                    res(image);
                }, 0);
                loadImg.onerror = (err) => rej(err);
            }
            )
        }
        Promise.all(ImageArray.map((image) => loadImage(image)))
        .then(() => dispatch(setImgsLoaded(true)))
        .catch((err) => console.log("Failed to load images", err));
        console.log(Loaded)
    },[Loaded])

    useEffect(()=>{
        setTimeout(()=>{
            if(Point >= 3){
                setPoint(1)
            }
            else{
                setPoint((prev)=>prev + 1)
            }
        }, 1000)
    },[Point])
    return(
        <main className={styles.main}>
            <div className={styles.main__form}>
                <div className={styles.main__form__circle}>
                    <div className={styles.main__form__circle_pouring}/>
                </div>
                <div className={styles.main__form__smallcircle}>
                    <div className={styles.main__form__smallcircle_pouring}/>
                </div>
            </div>
            <div className={styles.main__loader}>
                <BsFlower1 className={styles.main__loader_icon}/>
            </div>
            <p className={styles.main__word}>Loading
                {[...Array(Point)].map((el,index)=>{
                    return(
                        <span key={index} style={{color:'white'}}>.</span>
                    )
                })}
            </p>
        </main>
    )
}
export default Loader