export interface IThread {
    users: IUserInfo[],
    _id: string,
    created_at: string,
    updated_at: string,
    message?: ILastMessage

}

export interface IUserInfo {
    _id: string,
    name: string
}

export interface ILastMessage {
    _id: string,
    thread: string,
    body: string
}

export interface ICurrentThread {
    id: string,
    interlocutor: string
}

