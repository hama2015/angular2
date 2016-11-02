/**
 * Created by zhao on 2016/10/28.
 */
import {Config} from '../common/app.config';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../service/hero.service';
import { Hero } from '../bean/hero';
import { Router } from '@angular/router';
@Component({
    moduleId:Config.swpModeldId(module.id),
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: [ 'dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

    heroes: Hero[] = [];

    constructor(
        private router: Router,
        private heroService: HeroService) {
    }

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}