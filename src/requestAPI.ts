import axios from 'axios';

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['x-access-token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5YzIyM2E0MTk5YzAwMjI3NTI2OGEiLCJpYXQiOjE1Nzk2ODc4OTl9.M5q83O_nP6B8SbfNKOs3CaQTu4JaQcbr_MgDLSgqnTU'; // token

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
            headers: {
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5YzIyM2E0MTk5YzAwMjI3NTI2OGEiLCJpYXQiOjE1Nzk2ODc4OTl9.M5q83O_nP6B8SbfNKOs3CaQTu4JaQcbr_MgDLSgqnTU'
            },
            data: {
                email: email,
                password: password,
                confirmationPassword: confPassword
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