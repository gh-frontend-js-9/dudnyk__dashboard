const MONTH:string[] = [
    "January", "February", "March", "April", 
    "May", "June", "July", "August", 
    "September", "October", "November", "December"
]

export const getDate = (str:string):Date => {
    return new Date( Date.parse(str) );
}

export const YMDate = (date:Date):string => {
    return `${date.getDate()} ${MONTH[date.getMonth()]}`;
}