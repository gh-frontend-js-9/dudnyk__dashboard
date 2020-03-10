export const signIn = () => ({
    type: 'SIGN_IN'
})

export const signOut = () => ({
    type: 'SIGN_OUT'
})

export const assignUser= (content:any) => ({
    type: 'ASSIGN_USER',
    payload: {
        ...content
    }
})

export const setCurrentThread = (id:string, interlocutor:string) => ({
    type: 'SET_THREAD',
    payload: {
        id: id,
        interlocutor: interlocutor
    }
})

export const updateAllThreads = (content:any) => ({
    type: 'UPDATE_THREADS',
    payload: [...content]
        
})