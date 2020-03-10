import  {IUserInfo} from './IThreads'

export interface IMessage {
    _id: string,
    user: IUserInfo
    thread: string,
    body: string,
    created_at: string
}

export interface IResponseMessage {
    _id: string,
    user: string,
    thread: string,
    body: string,
    created_at: string,
    __v: string
}