import { GithubService } from './github.service'
import { Injectable } from '@angular/core'

@Injectable()
export class Context {
    private cacheData: Object = {}
    constructor(private gihubService: GithubService) { }

    getUser(userName: string): Promise<any> {
        let promise = new Promise<any>((resolve, reject) => {
            let isExist = this.cacheData.hasOwnProperty(userName)
            if (isExist) {
                resolve(this.cacheData[userName])
            }
            else {
                this.gihubService.getUser(userName).then(response => {
                    this.cacheData[userName] = response
                    resolve(response)
                })
            }
        })

        return promise
    }
}