
export let validateEmail = (email:string):boolean =>  {
    var re:RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return  !( (re.test(String(email).toLowerCase())) && validateLength(email, 6) );
}
export let validatePassword = (password:string):boolean => {
    return !validateLength(password, 5)
}

export let validateLength = (str:string, num:number):boolean  => {
    return str.length > num;
} 