import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppRoutingModule } from './app-routing.module'


import { HeroService } from './hero.service'

import { AppComponent } from './app.component'
import { HeroesComponent } from './heroes.component'
import { HeroDetailComponent } from './hero-detail.component'
import { DashboardComponent } from './dashboard.component'


@NgModule({
  imports: [BrowserModule,
    FormsModule,
    HttpModule,    
    AppRoutingModule
  ],
  declarations: [AppComponent, HeroesComponent, HeroDetailComponent, DashboardComponent],
  bootstrap: [AppComponent],
  providers: [HeroService]
})
export class AppModule { }
