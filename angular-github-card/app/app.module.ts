import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http'

import { myComponent } from './config'
import { AppComponent } from './app.component'

import { GithubService } from './github.service'
import { Context } from './context'


@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [...myComponent],
    bootstrap: [AppComponent],
    providers: [GithubService, Context]
})

export class AppModule {

}
