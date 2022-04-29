import PomodoroPhoto from '../images/Pomodoro.png'
import AniMangaPhoto from '../images/AniManga.png'
import UserListPhoto from '../images/UserList.png'
import ResumePhoto from '../images/MyResume.png'

export interface Progect{
    id: number,
    photo: any,
    urlGit: string,
    urlDep: string,
    name: string,
    topPosition:string,
    progectBorder: string,
}

const Pomodoro:Progect = {
    id: 1,
    name: 'Pomodoro timer',
    photo: PomodoroPhoto,
    urlGit: 'https://github.com/Saizy767/Pomodoro_TodoList',
    urlDep: 'https://pomodoro-saizy767.vercel.app',
    topPosition: '30%',
    progectBorder: 'rgb(53, 209, 66) 2px solid',
}
const Animanga:Progect = {
    id: 2,
    name: 'AniManga',
    photo: AniMangaPhoto,
    urlGit: 'https://github.com/Saizy767/AniManga',
    urlDep: 'https://ani-manga.vercel.app',
    topPosition: '30%',
    progectBorder: 'rgb(231, 132, 22) 2px solid',
}
const UserList: Progect= {
    id: 3,
    name:'User list',
    photo: UserListPhoto,
    urlGit:'https://github.com/Saizy767/listOfUsers',
    urlDep:'https://test-task-umber.vercel.app',
    topPosition: '-15%',
    progectBorder: 'rgb(100, 15, 143) 2px solid',
}
const MyResume: Progect = {
    id: 4,
    name: 'My Resume',
    photo: ResumePhoto,
    urlGit: 'https://github.com/Saizy767/',
    urlDep: '/',
    topPosition: '-15%',
    progectBorder: '2px solid rgb(184, 86, 86)'
}

export const Array_Progects: Array<Progect> = [Pomodoro, Animanga, UserList, MyResume]