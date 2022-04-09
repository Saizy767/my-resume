import {AiFillHome} from 'react-icons/ai'
import {IoIosPerson} from 'react-icons/io'
import {GiSkills} from 'react-icons/gi'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {GrDocumentPdf} from 'react-icons/gr'
import {MdWork} from 'react-icons/md'

import React from 'react'
import style from '../component/Navbar_cell/Navbar_cell.module.scss'


type Navbar ={
    id: number,
    title: string,
    color: string,
    image: JSX.Element,
    toPage: string,
}

    const Home: Navbar ={
        id: 2,
        title: 'Home',
        color: '#FFC20A',
        image: <AiFillHome className={style.cell__image}/>,
        toPage: 'home',
    }
    const About: Navbar={
        id: 3,
        title: 'About Me',
        color:'#EE870C',
        image: <IoIosPerson className={style.cell__image}/>,
        toPage: 'about',
        
    }
    const Projects: Navbar={
        id: 4,
        title: 'Progects',
        color: '#E42068',
        image: <MdWork className={style.cell__image}/>,
        toPage: 'progects',
    }
    const Contact: Navbar={
        id:6,
        title: 'Contact',
        color: '#D6218C',
        image: <BsFillTelephoneFill className={style.cell__image}/>,
        toPage: 'contacts',
    }
    const Resume: Navbar={
        id: 7,
        title: 'My Resume PDF',
        color: '#2C9BDA',
        image: <GrDocumentPdf className={style.cell__image}/>,
        toPage: 'home',
    }
    const Skills: Navbar={
        id: 8,
        title: 'Skills',
        color: '#DC3220',
        image: <GiSkills className={style.cell__image}/>,
        toPage: 'skill',
    }

export const Array_Navbar: Array<Navbar> = [Home, About,Skills, Projects, Contact, Resume]
