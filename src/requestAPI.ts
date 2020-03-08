import axios from 'axios';

axios.defaults.headers.common['Content-Type'] = 'application/json';
// axios.defaults.headers.common['x-access-token'] = localStorage.token;

const URL: string = 'https://geekhub-frontend-js-9.herokuapp.com';

class RequestAPI {
    static token:string = '';

    static async logIn(email:string, password:string, token:string):Promise<any> {
        let resp = await axios({
            url: URL + "/api/users/login",
            method: "POST",
            data: {
                email: email,
                password: password
            }, 
            headers: {
                'x-access-token': token
            }
        });
        return resp;
    }

    static async signUp(email:string, password:string, name:string, token:string):Promise<any> {
        let resp = await axios({
            url: URL + '/api/users/',
            method: 'POST',
            data: {
                email: email,
                password: password,
                name: name
            },
            headers: {
                'x-access-token': token
            }
        }); 
        return resp;
    }

    static async resetPassword(email:string, password:string, confPassword:string, token:string):Promise<any> {
        let resp = await axios({
            url: URL + '/api/users/reset_password',
            method: 'POST',
            data: {
                email: email,
                password: password,
                confirmationPassword: confPassword
            },
            headers: {
                'x-access-token': token
            }
        });
        return resp;
    }

    static async getAllThreads(token:string):Promise<any> {
        let resp = await axios({
            url: URL + '/api/threads',
            method: 'GET',
            headers: {
                'x-access-token': token
            }
        });
        return resp;
    }

    static async getCurrentUser(token:string):Promise<any> {
        let resp = await axios({
            url: URL + '/api/users/',
            method: 'GET',
            headers: {
                'x-access-token': token
            }
        });
        return resp;

    }

    static async getAllProjects(token:string):Promise<any> {
        try {
            let projects = await axios({
                method: 'GET',
                url: URL+'/api/projects/',
                headers: {
                    'x-access-token': token
                }
            });
            return projects.data
        } catch(error) {
            console.log(error);
            return Promise.resolve([]);
        } 
    }

    static async addProject(data:object, token:string):Promise<any> {
        try {
            let project = await axios({
                method: 'POST',
                url: URL+'/api/projects/',
                data: {
                    ...data
                },
                headers: {
                    'x-access-token': token
                }
            });
            return project.data;
        } catch(error) {
            console.log(error);
            return {};
        }
    }
}

export default RequestAPI;