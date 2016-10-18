import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { HeroComponent } from './heroes.component'
import { HeroDetailComponent } from './hero-detail.component'


@NgModule({
  imports: [BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroComponent
      }
    ])
  ],
  declarations: [AppComponent, HeroComponent, HeroDetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
