interface Contact{
    id: number,
    name: string,
    value: string,
    link: string,
    colorContact: string,
    cursor: string,
}

const GitHub: Contact = {
    id: 1,
    name: 'GitHub',
    value: 'https://github.com/Saizy767',
    link: 'https://github.com/Saizy767',
    colorContact: '#2ed1ce',
    cursor: 'pointer'
}
const Phone: Contact = {
    id: 2,
    name: 'Phone',
    value: '+7(929)-04-762-04',
    link: 'tel: +79290476204',
    colorContact:'#2e6cd1',
    cursor: 'pointer'
}
const Email: Contact = {
    id: 3,
    name: 'Email',
    value: 'kuklin230101@mail.ru',
    link: '/',
    colorContact: '#b16dbd',
    cursor: 'default'
}
const CodeWars: Contact = {
    id: 4, 
    name: 'CodeWars',
    value: 'https://www.codewars.com/users/Saizy767',
    link: 'https://www.codewars.com/users/Saizy767',
    colorContact: '#d14a28',
    cursor: 'pointer'
}

export const Array_Info = [Phone, GitHub, Email, CodeWars]

interface Additionally{
    id: number,
    name: string,
    value: string,
}

const Work:Additionally={
    id:1,
    name: 'Commercial experience',
    value: 'No'
}
const Date: Additionally={
    id: 2,
    name: 'My birthday',
    value: '23.01.2001'
}
const English: Additionally={
    id: 3,
    name: 'English',
    value: 'B1'
}
const Address: Additionally={
    id: 4,
    name: 'Address',
    value: 'Russia, Nizhny Novgorod'
}
const Move: Additionally={
    id: 5,
    name: 'Moving to other cities',
    value: 'Yes'
}

export const Array_Additioanlly = [Date, Work, English, Address, Move]
