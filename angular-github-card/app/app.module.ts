import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component'
import { CardComponent } from './card.component'
import { FormComponent } from './form.component'


import { GithubService } from './github.service'


@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [AppComponent, FormComponent, CardComponent],
    bootstrap: [AppComponent],
    providers: [GithubService]
})

export class AppModule {

}
