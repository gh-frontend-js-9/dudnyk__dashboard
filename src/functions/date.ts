const MONTH:string[] = [
    "January", "February", "March", "April", 
    "May", "June", "July", "August", 
    "September", "October", "November", "December"
]

export const getDate = (str:string):Date => {
    return new Date( Date.parse(str) );
}

export const DMDate = (date:Date):string => {
    return `${date.getDate()} ${MONTH[date.getMonth()]}`;
}

export const FullDate = (date:Date):string => {
    return DMDate(date) + ` ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
}