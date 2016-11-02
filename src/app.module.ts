///<reference path="app/service/in-memory-service.ts"/>
/**
 * Created by zhao on 2016/10/28.
 */
import './app/common/rxjs-extensions';
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule }     from '@angular/http';


// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import {InMemoryDataService}  from  './app/service/in-memory-service';

import { AppRoutingModule }     from './app/base/app-routing.module';
import { HeroService }         from './app/service/hero.service';

import { AppComponent }        from './app/app.component';
import { HeroDetailComponent } from './app/hero/hero-detail.component';
import { HeroesComponent }     from './app/hero/heroes.component';

import { DashboardComponent }  from './app/hero/dashboard.component';

import { HeroSearchComponent }     from './app/hero/hero-search.component';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent,
        HeroSearchComponent
    ],
    providers: [
        HeroService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
