export const signIn = (content:any) => ({
    type: 'SIGN_IN'
})

export const signOut = (content:any) => ({
    type: 'SIGN_OUT'
})

export const assignUser= (content:any) => ({
    type: 'ASSIGN_USER',
    payload: {
        ...content
    }
})