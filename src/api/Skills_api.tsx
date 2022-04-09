import JSLogo from '../images/JavaScript_logo_2.png'
import TSLogo from '../images/Typescript_logo.png'
import HTMLLogo from '../images/html5_logo.png'
import ReactLogo from '../images/React-icon.png'
import ReduxLogo from '../images/redux_logo.png'
import NextLogo from '../images/Nextjs-logo.png'

interface Skill{
    id: number,
    value: number,
    title: string,
    color: string,
    logo: Array<any>,
    position: string,
    animationTime: string,
}

const JavaScript: Skill={
    id:1,
    value:3,
    title: 'JavaScript',
    color: 'yellow',
    logo: [JSLogo],
    position: '200%',
    animationTime:'3s'
}
const TypeScript: Skill={
    id:2,
    value:2,
    title: 'TypeScript',
    color: 'blue',
    logo: [TSLogo],
    position: '-200%',
    animationTime:'3s'
}
const HTMLCSS: Skill={
    id:3,
    value:4,
    title: 'HTML 5 & CSS 3',
    color: 'orange',
    logo: [HTMLLogo],
    position: '200%',
    animationTime:'5s'
}
const React: Skill={
    id:4,
    value:4,
    title: 'React',
    color: '#61DBFB',
    logo: [ReactLogo],
    position: '200%',
    animationTime:'4s'
}
const Redux: Skill={
    id:5,
    value:3,
    title: 'Redux',
    color: 'rgb(118, 74, 188)',
    logo: [ReduxLogo],
    position: '-200%',
    animationTime:'4s'
}
const Next: Skill={
    id:6,
    value:3,
    title: 'Next.js',
    color: 'white',
    logo: [NextLogo],
    position: '-200%',
    animationTime:'5s',
}

export const Array_Skills:Skill[]=[JavaScript,TypeScript,React,Redux,HTMLCSS,Next]