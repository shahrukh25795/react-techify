export const loginPreConfigData: Array<{
    email: string;
    password: string;
    type: string;
    id: string;
}> = [
        { "id": "1", "email": "admin@mail.com", "password": "admin@123", "type": "admin" },
        { "id": "2", "email": "ram@mail.com", "password": "ram@1234", "type": "user" },
        { "id": "3", "email": "shyam@mail.com", "password": "shyam@123", "type": "user" },
    ]

export const ramUserPreConfigData: Array<{
    title: string;
    desc: string;
    id: string;
}> = [
        { "title": "Play", "desc": "I need to go to play football", "id": "1" },
        { "title": "Cook", "desc": "Need to buy vegetables", "id": "2" },
        { "title": "Health", "desc": "Need to get health checkup tomorrow", "id": "2" },
    ]

export const shyamUserPreConfigData: Array<{
    title: string;
    desc: string;
    id: string;
}> = [
        { "title": "Play", "desc": "I need to go to play badminton", "id": "1" },
        { "title": "Health", "desc": "Renew my gym membership", "id": "2" }
    ]