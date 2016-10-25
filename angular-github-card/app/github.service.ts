import { Injectable } from '@angular/core'
import { Headers, Http } from '@angular/http'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GithubService {
    private url: string = 'https://api.github.com/users/';
    constructor(private http: Http) { }

    getUser(userName): Promise<any> {
        return this.http.get(this.url + userName).toPromise().then(response => response.json()).catch(this.handleError)

    }
    private handleError(error): Promise<any> {
        console.log('An error occurred');
        return Promise.reject(error.message || error)
    }
}
