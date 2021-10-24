export type LoginFormTypes = {
    email: string;
    password: string;
}

export type AddTodoFormTypes = {
    title: string;
    desc: string;
}

export type InputType = "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week"

export type LoginKeys = "email" | "password"
export type AddtodoKey = "title" | "desc"

export type User = {
    completed: boolean
    id: number
    title: string
    userId: number
    desc: string
}

export type UserType = {
    admin: "admin@123";
    user: "user"
}

export type UserInfoType = {
    email: string;
    password: string;
    type: string;
}

export type DataType = {
    title: string;
    desc: string;
    id: string;
}