import axios from 'axios';
import { url } from 'inspector';

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['x-access-token'] = localStorage.token;

const URL: string = 'https://geekhub-frontend-js-9.herokuapp.com';

class RequestAPI {
    static async logIn(email:string, password:string):Promise<any> {
        let resp = await axios({
            url: URL + "/api/users/login",
            method: "POST",
            data: {
                email: email,
                password: password
            }
        });
        return resp;
    }

    static async signUp(email:string, password:string, name:string):Promise<any> {
        let resp = await axios({
            url: URL + '/api/users/',
            method: 'POST',
            data: {
                email: email,
                password: password,
                name: name
            }
        }); 
        return resp;
    }

    static async resetPassword(email:string, password:string, confPassword:string):Promise<any> {
        let resp = await axios({
            url: URL + '/api/users/reset_password',
            method: 'POST',
            data: {
                email: email,
                password: password,
                confirmationPassword: confPassword
            }
        });
        return resp;
    }

    static async getCurrentUser():Promise<any> {
        let resp = await axios({
            url: URL + '/api/users/',
            method: 'GET',
            headers: {
                // 'x-access-token': localStorage.token
            }
        });
        return resp;

    }

    static async getAllProjects():Promise<any> {
        try {
            let projects = await axios({
                method: 'GET',
                url: URL+'/api/projects/'
            });
            return projects.data
        } catch(error) {
            console.log(error);
            return Promise.resolve([]);
        } 
    }

    static async addProject(data:object):Promise<any> {
        try {
            let project = await axios({
                method: 'POST',
                url: URL+'/api/projects/',
                data: {
                    ...data
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