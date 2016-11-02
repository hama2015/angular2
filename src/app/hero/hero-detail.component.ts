/**
 * Created by zhao on 2016/10/28.
 */
import {Config} from '../common/app.config';
import { Component,Input, OnInit} from '@angular/core';
import { Hero } from '../bean/hero';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService } from '../service/hero.service';

@Component({
    moduleId:Config.swpModeldId(module.id),
    selector: 'my-hero-detail',
    styleUrls:["hero-detail.component.css"],
    template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div>
        <label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name" />
      </div>
      <button (click)="save()">Save</button>
      <button (click)="goBack()">Back</button>
     </div>
`
})
export class HeroDetailComponent  implements OnInit {
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}
    hero: Hero;
    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        });
    }
    goBack(): void {
        this.location.back();
    }
    save(): void {
        this.heroService.update(this.hero)
            .then(() => this.goBack());
    }
}