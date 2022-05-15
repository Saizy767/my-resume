import PomodoroPhoto from '../images/Pomodoro.png'
import AniMangaPhoto from '../images/AniManga.png'
import UserListPhoto from '../images/UserList.png'
import ResumePhoto from '../images/MyResume.png'
import MaterialListPhoto from '../images/UserListBravo.png'

export type Stack={
    name: string,
    id: number,
    color: string,
}
export interface Progect{
    id: number,
    photo: string,
    urlGit: string,
    urlDep: string | null,
    name: string,
    isDeploy: boolean,
    activeProgect: string,
    technology: Stack[],
}

const Pomodoro:Progect = {
    id: 1,
    name: 'Pomodoro timer',
    photo: PomodoroPhoto,
    urlGit: 'https://github.com/Saizy767/Pomodoro_TodoList',
    urlDep: 'https://pomodoro-saizy767.vercel.app',
    activeProgect: 'rgb(210, 201, 74)',
    isDeploy: true,
    technology:[{name:'HTML', id: 1, color:'rgb(206,86,52)'},
                {name:'CSS', id: 2, color:'rgb(46,107,77)'}, 
                {name:'React', id: 3, color:'rgb(141,206,236)'},
                {name:'Express', id: 4 ,color:'rgb(0,0,0)'},
                {name:'Redux', id: 5, color:'rgb(109,74,176)'}, 
                {name:'localStorage', id: 6, color:'rgb(236,217,78)'},
                {name:'Redux-thunk', id: 7, color:'rgb(109,74,176)'},
                {name:'React Router DOM', id: 8, color:'rgb(141,206,236)'},
            ]
    
}
const Animanga:Progect = {
    id: 2,
    name: 'AniManga',
    photo: AniMangaPhoto,
    urlGit: 'https://github.com/Saizy767/AniManga',
    urlDep: 'https://ani-manga.vercel.app',
    activeProgect: 'rgb(231, 132, 22)',
    isDeploy: true,
    technology:[{name:'HTML', id: 1, color:'rgb(206,86,52)'},
                {name:'SCSS', id: 2, color:'rgb(178,100,139)'}, 
                {name:'React', id: 3, color:'rgb(141,206,236)'},
                {name:'Babel', id: 4, color:'rgb(236,214,91)'},
                {name:'Redux', id: 5, color:'rgb(109,74,176)'}, 
                {name:'TypeScript', id: 6, color:'rgb(66,114,186)'},
                {name:'Webpack', id: 7, color:'rgb(56,111,178)'},
                {name:'Next.js', id: 8, color:'rgb(0,0,0)'},
                {name:'Redux toolkit', id: 9, color:'rgb(109,74,176)'},
            ]
}
const UserList: Progect= {
    id: 3,
    name:'User list',
    photo: UserListPhoto,
    urlGit:'https://github.com/Saizy767/listOfUsers',
    urlDep:'https://test-task-umber.vercel.app',
    activeProgect: 'rgb(68, 169, 238)',
    isDeploy: true,
    technology:[{name:'HTML', id: 1, color:'rgb(206,86,52)'},
                {name:'CSS', id: 2, color:'rgb(46,107,77)'}, 
                {name:'React', id: 3, color:'rgb(141,206,236)'},
                {name:'React Context', id: 4, color:'rgb(236,217,78)'}
            ]
}
const MyResume: Progect = {
    id: 4,
    name: 'My Resume',
    photo: ResumePhoto,
    urlGit: 'https://github.com/Saizy767/my-resume',
    urlDep: '/',
    activeProgect: 'rgb(80, 52, 218)',
    isDeploy: true,
    technology: [{name:'HTML', id: 1, color:'rgb(206,86,52)'},
                {name:'SCSS', id: 2, color:'rgb(178,100,139)'}, 
                {name:'React', id: 3, color:'rgb(141,206,236)'},
                {name:'Express', id: 4, color:'rgb(0,0,0)'},
                {name:'Redux', id: 5, color:'rgb(109,74,176)'}, 
                {name:'TypeScript', id: 6, color:'rgb(66,114,186)'},
                {name:'Webpack', id: 7, color:'rgb(56,111,178)'},
                {name:'Babel', id: 8, color:'rgb(236,214,91)'},
                {name:'Redux toolkit', id: 9, color:'rgb(109,74,176)'},
                {name:'React Router DOM', id: 10, color:'rgb(141,206,236)'},
            ]
}
const MaterialUIList:Progect = {
    id: 5,
    name: 'MaterialUI List',
    photo: MaterialListPhoto,
    urlGit: 'https://github.com/Saizy767/userTableBravo',
    urlDep: null,
    activeProgect: 'rgb(12,122,12)',
    isDeploy: false,
    technology: [{name:'HTML', id: 1, color:'rgb(206,86,52)'},
                {name:'SCSS', id: 2, color:'rgb(178,100,139)'}, 
                {name:'React', id: 3, color:'rgb(141,206,236)'},
                {name:'Express', id: 4, color:'rgb(0,0,0)'},
                {name:'Redux', id: 5, color:'rgb(109,74,176)'}, 
                {name:'TypeScript', id: 6, color:'rgb(66,114,186)'},
                {name:'MaterialUI', id: 7, color: 'rgb(63, 48, 159)'},
                {name:'React Router DOM', id: 8, color:'rgb(141,206,236)'},
                {name:'Redux toolkit', id: 9, color:'rgb(109,74,176)'},
                {name:'Axios', id: 10, color:'rgb(54, 53, 167)'}
            ]
}

export const Array_Progects: Array<Progect> = [Pomodoro, Animanga, UserList, MyResume, MaterialUIList]