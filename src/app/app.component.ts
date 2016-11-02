/**
 * Created by zhao on 2016/10/28.
 */
import { Config } from './common/app.config';
import { Component } from '@angular/core';
@Component({
    moduleId:Config.swpModeldId(module.id),
    selector: 'my-app',
    styleUrls: ['app.component.css'],
    template: `
    <h1>{{title}}</h1>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/heroes">Heroes</a>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
    title = 'Tour of Heroes';
}